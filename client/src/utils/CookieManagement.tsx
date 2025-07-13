/**
 * @file cookieManagement.tsx
 * @description Utility functions for managing cookies in the application.
 * 
 * @utility_file CookieManagement
 * @function setCookie - Sets a cookie with a specified name, value, and expiration days.
 * @function getCookie - Retrieves the value of a cookie by its name.
 * @function deleteCookie - Deletes a cookie by its name.
 * @returns {void}
 */

export function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}