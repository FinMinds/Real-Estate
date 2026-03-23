declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'react' {
  export type ReactNode = unknown;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: unknown;
  }
}

declare module 'next/navigation' {
  export function notFound(): never;
}

declare module 'next/server' {
  export class NextResponse {
    static json(value: unknown): NextResponse;
  }
}

declare module 'next-auth' {
  type RouteHandler = (request: unknown) => unknown;

  export default function NextAuth(config: {
    providers: unknown[];
  }): {
    handlers: {
      GET: RouteHandler;
      POST: RouteHandler;
    };
  };
}

declare module 'next-intl/server' {
  export function getRequestConfig(
    createConfig: (context: { requestLocale: Promise<string | undefined> }) => Promise<{
      locale: string;
      messages: Record<string, string>;
    }>,
  ): (context: { requestLocale: Promise<string | undefined> }) => Promise<{
    locale: string;
    messages: Record<string, string>;
  }>;
}

declare module 'next-intl/middleware' {
  export default function createMiddleware(config: {
    locales: readonly string[];
    defaultLocale: string;
  }): (request: unknown) => unknown;
}
