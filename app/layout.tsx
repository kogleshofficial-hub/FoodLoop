import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'FoodLoop — Rescue Good Food', template: '%s | FoodLoop' },
  description: 'A global food rescue network connecting surplus food with people and community organizations.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://food-loop.vercel.app'),
  openGraph: { title: 'FoodLoop — Rescue Good Food', description: 'Give surplus food another chance.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}