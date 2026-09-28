import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Perfect Health & Fitness - Premier Gym in CBD Belapur, Navi Mumbai',
  description: 'Experience peak physical transformation at Perfect Health & Fitness in CBD Belapur, Navi Mumbai. Premium strength equipment, elite coaching, custom nutrition, and 4.9★ rating.',
  keywords: [
    'gym in CBD Belapur',
    'Perfect Health & Fitness Navi Mumbai',
    'best gym in Navi Mumbai',
    'fitness center Belapur',
    'personal trainer Navi Mumbai',
    'weight training Belapur',
    'Arenja Plaza gym',
  ],
  openGraph: {
    title: 'Perfect Health & Fitness - Premier Gym in CBD Belapur, Navi Mumbai',
    description: 'Transform your body with high-end strength equipment, certified coaching, and custom nutrition at CBD Belapur, Navi Mumbai. Rated 4.9★ by 222+ members.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfect Health & Fitness - Premier Gym in CBD Belapur',
    description: 'Premier Strength & Conditioning Gym in Navi Mumbai. Rated 4.9★ by 222+ members.',
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-red-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

