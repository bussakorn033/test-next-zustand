import { v4 as uuidv4 } from "uuid";

export const getCorrelationId = () => uuidv4();

export const getPreLoginAuthorization = () => {
  return "Basic " + import.meta.env.VITE_PRE_LOGIN_KEY;
};

export const getCurrentLanguage = (language: string): string => {
  let lang = "en";
  if (["th-TH", "th"].includes(language)) {
    lang = "th";
  }
  return lang;
};

export function getItem(key: string) {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(key) as string);
  }
  return null;
}

export const isJsonString = (jsonString: string): boolean => {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    // Handle the error appropriately, e.g., log to an external service
    return false;
  }
};

export const getCurrentTimestamp = () => new Date().getTime();
