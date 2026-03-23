import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['nl', 'fr', 'en'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !hasLocale(locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
