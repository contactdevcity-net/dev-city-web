import 'server-only'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ja: () => import('../dictionaries/ja.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  ko: () => import('../dictionaries/ko.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: string) => {
  const currentLocale = hasLocale(locale) ? locale : 'en'
  return dictionaries[currentLocale as Locale]()
}
