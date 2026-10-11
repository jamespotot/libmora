export type ResourceCategory =
  | 'library' | 'framework' | 'ui-component' | 'icon'
  | 'animation' | 'styling' | 'developer-tool' | 'state-data';

export interface DeveloperResource {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  languages: string[];
  frameworks: string[];
  license: string | null;
  openSource: boolean | null;
  freeToUse: boolean | null;
  websiteUrl: string;
  documentationUrl?: string;
  repositoryUrl?: string;
  npmPackageName?: string;
  features: string[];
  source: 'curated' | 'npm';
  lastVerified?: string;
}
