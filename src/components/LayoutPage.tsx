import { interFont } from '@/lib/nextFonts';
// import useAuth from '@/lib/use-custom-hooks/useAuth';
import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutPageProps {
  children: ReactNode;
}

export default function LayoutPage({ children }: LayoutPageProps) {
  // useAuth();

  return (
    <div className={`${interFont.variable} font-inter`}>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      {children}
    </div>
  );
}
