import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Velora JobBook — Offline-first business clarity',
  description: 'A functional product showcase for Velora JobBook, an offline-first business app for technicians and small contractors.',
  openGraph: {
    title: 'Velora JobBook — Run the work. Remember everything.',
    description: 'Jobs, customers, payments, expenses, and dues in one calm, offline-first workspace.',
    type: 'website',
    images: [{ url: '/og.png', width: 1792, height: 936, alt: 'Velora JobBook — Run the work. Remember everything.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora JobBook',
    description: 'Offline-first business clarity for technicians and small contractors.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
