import { useState } from 'react';

const KEY = 'libmora:bookmarks:v1';
function load(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
  } catch { return []; }
}
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>(load);
  const toggleBookmark = (id: string) => setBookmarks((current) => {
    const next = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* storage unavailable */ }
    return next;
  });
  return { bookmarks, toggleBookmark };
}
