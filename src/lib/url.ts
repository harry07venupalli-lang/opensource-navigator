import type { RepoRef } from '../types';
export class UrlError extends Error {}
export function parseGitHubUrl(value: string): RepoRef {
  let url: URL;
  try { url = new URL(value.trim()); } catch { throw new UrlError('Paste a complete public GitHub URL, for example https://github.com/owner/repository.'); }
  if (url.hostname.toLowerCase() !== 'github.com') throw new UrlError('OpenSource Navigator currently supports public repositories on github.com only.');
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length < 2 || !/^[\w.-]+$/.test(parts[0]) || !/^[\w.-]+$/.test(parts[1])) throw new UrlError('That does not look like a GitHub repository URL.');
  const repo = parts[1].replace(/\.git$/, '');
  const issueNumber = parts[2] === 'issues' && /^\d+$/.test(parts[3] ?? '') ? Number(parts[3]) : undefined;
  return { owner: parts[0], repo, issueNumber };
}
