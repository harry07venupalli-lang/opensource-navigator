import { describe, expect, it, vi } from 'vitest';
import { createAnalytics } from './analytics';

describe('analytics abstraction', () => {
  it('delegates only to an explicitly supplied provider', () => {
    const track = vi.fn();
    createAnalytics({ track }).track('deep_analysis_interest', { source: 'preview' });
    expect(track).toHaveBeenCalledWith('deep_analysis_interest', { source: 'preview' });
  });
  it('has a safe no-network default', () => {
    expect(() => createAnalytics().track('landing_view')).not.toThrow();
  });
});
