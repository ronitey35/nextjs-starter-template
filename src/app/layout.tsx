import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/libs/fonts';
import QueryProvider from '@/providers/query-provider';


export const metadata: Metadata = {
  title: 'A newly created app',
  description: 'Template by ronitey35',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
        {children}
        </QueryProvider>
        </body>
    </html>
  );
}
