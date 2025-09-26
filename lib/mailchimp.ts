import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!,
});

export interface ContactData {
  email: string;
  firstName?: string;
  lastName?: string;
  consentDt: string; // ISO8601
  consentSrc: string;
  consentIp: string;
  memberSince?: string; // YYYY-MM-DD
  renewalDt?: string; // YYYY-MM-DD
  status?: 'active' | 'lapsed';
}

export interface MailchimpContact {
  email_address: string;
  status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
  merge_fields: {
    FNAME?: string;
    LNAME?: string;
    CONSENT_DT?: string;
    CONSENT_SRC?: string;
    CONSENT_IP?: string;
    MEMBER_SINCE?: string;
    RENEWAL_DT?: string;
    STATUS?: string;
  };
  tags: string[];
}

export class MailchimpService {
  private audienceId: string;

  constructor() {
    this.audienceId = process.env.MAILCHIMP_AUDIENCE_ID!;
  }

  async upsertContact(contactData: ContactData, tags: string[]): Promise<{ success: boolean; error?: string }> {
    try {
      const subscriberHash = this.getSubscriberHash(contactData.email);
      
      const contact: any = {
        email_address: contactData.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: contactData.firstName || '',
          LNAME: contactData.lastName || '',
          CONSENT_DT: contactData.consentDt,
          CONSENT_SRC: contactData.consentSrc,
          CONSENT_IP: contactData.consentIp,
          MEMBER_SINCE: contactData.memberSince || '',
          RENEWAL_DT: contactData.renewalDt || '',
          STATUS: contactData.status || 'active',
        },
        tags: tags,
      };

      // First, try to update existing contact
      try {
        await mailchimp.lists.updateListMember(this.audienceId, subscriberHash, {
          email_address: contactData.email,
          status: 'subscribed',
          merge_fields: contact.merge_fields,
        });
        
        // Update tags separately
        await this.updateContactTags(subscriberHash, tags);
        
        return { success: true };
      } catch (error: any) {
        // If contact doesn't exist, create new one
        if (error.status === 404) {
          await mailchimp.lists.addListMember(this.audienceId, contact);
          return { success: true };
        }
        throw error;
      }
    } catch (error: any) {
      console.error('Mailchimp upsert error:', error);
      return { 
        success: false, 
        error: error.response?.body?.detail || error.message || 'Unknown error' 
      };
    }
  }

  async updateContactTags(subscriberHash: string, tags: string[]): Promise<void> {
    try {
      await mailchimp.lists.updateListMemberTags(this.audienceId, subscriberHash, {
        tags: tags.map(tag => ({ name: tag, status: 'active' }))
      });
    } catch (error) {
      console.error('Error updating tags:', error);
      // Don't throw here as the main contact update might have succeeded
    }
  }

  async getContact(email: string): Promise<MailchimpContact | null> {
    try {
      const subscriberHash = this.getSubscriberHash(email);
      const response = await mailchimp.lists.getListMember(this.audienceId, subscriberHash);
      return response;
    } catch (error: any) {
      if (error.status === 404) {
        return null;
      }
      throw error;
    }
  }

  async resyncContact(email: string, contactData: ContactData, tags: string[]): Promise<{ success: boolean; error?: string }> {
    return this.upsertContact(contactData, tags);
  }

  private getSubscriberHash(email: string): string {
    // Mailchimp requires MD5 hash of lowercase email
    const crypto = require('crypto');
    return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  }

  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      await mailchimp.lists.getList(this.audienceId);
      return { success: true };
    } catch (error: any) {
      return { 
        success: false, 
        error: error.response?.body?.detail || error.message || 'Connection failed' 
      };
    }
  }
}

export const mailchimpService = new MailchimpService();