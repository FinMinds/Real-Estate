import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['nl', 'fr', 'en'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
