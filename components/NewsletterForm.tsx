'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  className?: string;
}

export default function NewsletterForm({ className = '' }: NewsletterFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    fname: '',
    lname: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Get client IP (this is a simplified approach - in production you'd want server-side IP detection)
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          fname: formData.fname || undefined,
          lname: formData.lname || undefined,
          consent_ip: '127.0.0.1', // This should be handled server-side
          consent_src: 'rtlmb.org/support',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        setFormData({ email: '', fname: '', lname: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to subscribe' });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`newsletter-form-container ${className}`}>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="First Name (Optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Last Name (Optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              Subscribing...
            </>
          ) : (
            <>
              <i className="fas fa-envelope"></i>
              Subscribe to Newsletter
            </>
          )}
        </button>

        {message && (
          <div className={`mt-4 p-3 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        <div className="mt-4 text-xs text-gray-600">
          <p>
            By subscribing, you agree to receive emails from Right to Life Mississauga Brampton. 
            You can unsubscribe at any time. We respect your privacy and will never share your information.
          </p>
          <p className="mt-2">
            <strong>Mailing Address:</strong> Right to Life Mississauga Brampton, 
            Mississauga & Brampton, ON, Canada
          </p>
        </div>
      </form>
    </div>
  );
}
