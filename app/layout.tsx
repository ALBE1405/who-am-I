import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Albert Arokiyasouridass | Healthcare Engineering & Applied AI',
  description: 'Albert Arokiyasouridass is a Forward Deployed Engineer and AI Customer Engineer whose work spans .NET modernization, full-stack applications, cloud infrastructure, healthcare platforms, and document intelligence.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>;}
