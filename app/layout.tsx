// layout.tsx
"use client"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useState } from "react";

import MainHeader from '@/components/mainHeader';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [address, setAddress] = useState(false);

  const metamaskConnect = () => {
      setAddress(prev => !prev);
  };

  const metadata: Metadata = {
    title: 'SocialChain',
    description: 'The place to b e',
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <MainHeader metamaskConnect={metamaskConnect} address={address} />
        {children}
        {/* Footer ? */}
      </body>
    </html>
  );
}
