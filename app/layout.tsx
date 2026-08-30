import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'FoodLoop — Rescue Good Food', template: '%s | FoodLoop' },
  description: 'FoodLoop is a global food rescue network connecting surplus food from restaurants, shops and households with people and community groups who can use it.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://food-loop-app.vercel.app'),
  openGraph: {
    title: 'FoodLoop — Rescue Good Food',
    description: 'Give surplus food another chance. Share more. Waste less.',
    type: 'website',
    url: 'https://food-loop-app.vercel.app',
    siteName: 'FoodLoop',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><meta name="google-site-verification" content="98cIgvnYkjcVprw22odG8Py81hWECWSy11ZOUrHuDUM" /></head><body>{children}</body></html>;
}
