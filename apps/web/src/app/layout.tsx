import type { ReactNode } from 'react';

import './globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
