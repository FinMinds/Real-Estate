import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['nl', 'fr', 'en'] as const;

type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  if (!requestedLocale || !locales.includes(requestedLocale as Locale)) {
    notFound();
  }

  const locale = requestedLocale as Locale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
