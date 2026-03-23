import NextAuth from 'next-auth';

const handler = NextAuth({
  providers: []
});

export const { GET, POST } = handler.handlers;
