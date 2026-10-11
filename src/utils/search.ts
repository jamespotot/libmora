import Fuse from 'fuse.js';
import type { DeveloperResource } from '../types/resource';

export function searchResources(items: DeveloperResource[], query: string): DeveloperResource[] {
  if (!query.trim()) return items;
  const fuse = new Fuse(items, {
    keys: [{ name: 'name', weight: 0.35 }, { name: 'tags', weight: 0.25 }, { name: 'description', weight: 0.2 }, { name: 'features', weight: 0.1 }, { name: 'frameworks', weight: 0.1 }],
    threshold: 0.4,
    ignoreLocation: true,
  });
  return fuse.search(query.trim()).map((result) => result.item);
}
