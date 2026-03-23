type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  return (
    <main>
      <h1>Real Estate Analysis Platform</h1>
      <p>Locale shell placeholder: {locale}</p>
    </main>
  );
}
