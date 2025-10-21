import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Cookie'den veya header'dan locale al
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'tr';

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});

