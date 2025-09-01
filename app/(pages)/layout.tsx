import type { Metadata } from 'next';
import '@globals/styles/globals.scss';
import metadataJSON from '@app/(pages)/_globals/metadata.json';
import fonts from './_globals/fonts';
import Navbar from '@app/(pages)/_components/Navbar/Navbar';
import Footer from '@app/(pages)/_components/Footer/Footer';
import { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = metadataJSON;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        <Analytics />
        <Suspense>
          <Navbar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
