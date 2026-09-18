import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchRepository, GitHubError } from './github';

describe('GitHub API failure handling', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('turns a public API rate limit into a safe user-facing error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('{}', { status: 403 })));
    await expect(fetchRepository({ owner: 'owner', repo: 'repo' })).rejects.toMatchObject<Partial<GitHubError>>({ status: 403, message: expect.stringContaining('rate limit') });
  });
  it('turns a missing or private repository response into a friendly error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('{}', { status: 404 })));
    await expect(fetchRepository({ owner: 'owner', repo: 'repo' })).rejects.toThrow('Repository not found');
  });
});
