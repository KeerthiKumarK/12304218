 
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]{4,20}$/.test(str);
}
