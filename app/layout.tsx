import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Right to Life Mississauga Brampton - Protecting Life from Fertilization to Natural Death',
  description: 'Join Right to Life Mississauga Brampton in protecting life from fertilization to natural death and promoting a culture of life in our communities.',
  keywords: 'pro-life, right to life, mississauga, brampton, abortion, euthanasia, life chain, 40 days for life',
  authors: [{ name: 'Right to Life Mississauga Brampton' }],
  openGraph: {
    title: 'Right to Life Mississauga Brampton',
    description: 'Protecting life from fertilization to natural death and promoting a culture of life in our communities.',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Font Awesome for icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
