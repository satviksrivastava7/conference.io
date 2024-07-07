import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'conference.io',
  description: 'Team Management App',
  icons: {
    icon: '/icons/conference_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: 'blockButton',
            logoImageUrl: '/icons/conference_logo.png',
          },
          variables: {
            colorText: '#ffffff',
            colorInputBackground: 'rgba(0, 224, 154, 0.25)',
            colorInputText: '#fff',
          },
        }}
      >
        <body
          className={`${inter.className} bg-gradient-to-br from-gradient-mid from-2% to-gradient-end to-40%`}
        >
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
