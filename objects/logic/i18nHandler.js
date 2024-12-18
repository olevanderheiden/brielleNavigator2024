import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "../localisation/en.json";
import nl from "../localisation/nl.json";
import pt from "../localisation/pt.json";

//key value pairs for the translations
i18n.translations = {
  en: en,
  nl: nl,
  pt: pt,
};

//setting the locale to the device language
i18n.locale = Localization.getLocales()[0].languageCode;

// When a value is missing from a language, fallback to another language.
i18n.fallbacks = true;

export default i18n;
