import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const rl = await requestLocale;
  const locale = routing.locales.includes(rl as any)
    ? (rl as string)
    : routing.defaultLocale;

  const defaultTranslations = (await import(`../../translations/${routing.defaultLocale}.json`)).default;

  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch {
    // If no file exists for the locale, fall back to default
    messages = {};
  }

  // Merge default locale first, then override with specific locale
  const mergedMessages = { ...defaultTranslations, ...messages };

  return {locale, messages: mergedMessages};
});
