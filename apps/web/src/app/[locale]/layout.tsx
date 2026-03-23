import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

const locales = ['nl', 'fr', 'en'] as const;

type Locale = (typeof locales)[number];

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <>{children}</>;
}
