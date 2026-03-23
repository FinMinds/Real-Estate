import {getRequestConfig} from 'next-intl/server';

const locales = ['nl', 'fr', 'en'] as const;
type AppLocale = (typeof locales)[number];

function isAppLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale: AppLocale = requested && isAppLocale(requested) ? requested : 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
