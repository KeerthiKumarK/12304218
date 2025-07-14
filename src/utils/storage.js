// src/utils/storage.js

const STORAGE_KEY = "shortUrls";

/**
 * Get all shortened URL entries from localStorage
 * @returns {Array} list of entries
 */
export function getShortUrls() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

/**
 * Save entries to localStorage
 * @param {Array} data - list of shortened URLs
 */
export function saveShortUrls(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Add a new shortened URL entry
 * @param {Object} newEntry - single shortened URL data object
 */
export function addShortUrl(newEntry) {
  const current = getShortUrls();
  current.push(newEntry);
  saveShortUrls(current);
}

/**
 * Find a URL entry by shortcode
 * @param {string} code - shortcode
 * @returns {Object|null} matching entry
 */
export function findByShortcode(code) {
  const data = getShortUrls();
  return data.find(entry => entry.code === code) || null;
}

/**
 * Update a URL entry by its shortcode (e.g., add click log)
 * @param {string} code - shortcode
 * @param {Function} updater - function(entry) to modify the entry
 */
export function updateShortUrl(code, updater) {
  const urls = getShortUrls();
  const index = urls.findIndex(u => u.code === code);
  if (index !== -1) {
    updater(urls[index]);
    saveShortUrls(urls);
  }
}
