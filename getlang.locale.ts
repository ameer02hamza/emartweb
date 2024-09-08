export enum Lang {
  en = "en",
  ar = "ar",
}
const getAppLocale = {
  [Lang.en]: () => import("./messages/en.json").then((m) => m.default),
  [Lang.ar]: () => import("./messages/ar.json").then((m) => m.default),
};

export const getLocale = (lang: Lang) => {
  return getAppLocale[lang]();
};
