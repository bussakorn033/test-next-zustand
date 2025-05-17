import { ACCESS_TOKEN } from "@/constants";

export function useAccessToken() {
  return new Promise((resolve) => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN) || null;
    if (accessToken) {
      resolve(accessToken);
    } else {
      resolve(import.meta.env.VITE_PRE_LOGIN_KEY);
    }
  });
}
