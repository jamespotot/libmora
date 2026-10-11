import { ArrowUpRight, BookOpen, Code2, Bookmark, Check, GitCompareArrows } from 'lucide-react';
import type { DeveloperResource } from '../types/resource';
interface Props {
  resource: DeveloperResource;
  bookmarked: boolean;
  comparing: boolean;
  onOpen: () => void;
  onBookmark: () => void;
  onCompare: () => void;
  compareDisabled: boolean;
}
export default function ResourceCard({ resource, bookmarked, comparing, onOpen, onBookmark, onCompare, compareDisabled }: Props) {
  return <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-blue-500/50">
    <div className="mb-3 flex items-start justify-between gap-3">
      <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs capitalize text-slate-300">{resource.category.replaceAll('-', ' ')}</span>
      <button type="button" onClick={onBookmark} aria-label={bookmarked ? `Remove ${resource.name} bookmark` : `Bookmark ${resource.name}`} aria-pressed={bookmarked} className={`rounded-lg p-2 hover:bg-slate-800 ${bookmarked ? 'text-blue-400' : 'text-slate-400'}`}><Bookmark size={19} fill={bookmarked ? 'currentColor' : 'none'} /></button>
    </div>
    <button onClick={onOpen} className="text-left text-xl font-semibold text-white hover:text-blue-400">{resource.name}</button>
    <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{resource.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">{resource.tags.slice(0,3).map(tag => <span key={tag} className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">{tag}</span>)}</div>
    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-4 text-sm">
      <button onClick={onOpen} className="font-medium text-blue-400 hover:text-blue-300">Details</button>
      {resource.documentationUrl && <a className="inline-flex items-center gap-1 text-slate-300 hover:text-white" href={resource.documentationUrl} target="_blank" rel="noopener noreferrer"><BookOpen size={15}/>Docs</a>}
      {resource.repositoryUrl && <a className="inline-flex items-center gap-1 text-slate-300 hover:text-white" href={resource.repositoryUrl} target="_blank" rel="noopener noreferrer"><Code2 size={15}/>Code</a>}
      <a href={resource.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${resource.name} website`} className="text-slate-400 hover:text-blue-300"><ArrowUpRight size={17}/></a>
      <button type="button" onClick={onCompare} disabled={compareDisabled && !comparing} aria-pressed={comparing} title={compareDisabled && !comparing ? 'Maximum of 3 resources' : undefined} className={`ml-auto inline-flex items-center gap-1 rounded-lg border px-2 py-1.5 text-xs ${comparing ? 'border-blue-500 bg-blue-500/20 text-blue-300' : 'border-slate-700 text-slate-300 hover:border-blue-500'} disabled:cursor-not-allowed disabled:opacity-40`}>{comparing ? <Check size={14}/> : <GitCompareArrows size={14}/>} {comparing ? 'Selected' : 'Compare'}</button>
    </div>
  </article>;
}
