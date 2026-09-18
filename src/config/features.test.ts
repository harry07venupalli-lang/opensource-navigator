import { describe, expect, it } from 'vitest';
import { FeatureId, features, freeFeatureIds, futureDeepFeatureIds, isAvailable } from './features';

describe('product feature boundary', () => {
  it('keeps the useful core available without an entitlement', () => {
    expect(freeFeatureIds.every(isAvailable)).toBe(true);
    expect(features[FeatureId.BasicContributionPath].summary).toContain('Files');
  });
  it('marks deeper capabilities as planned rather than pretending they are purchased', () => {
    expect(futureDeepFeatureIds.every(id => features[id].availability === 'planned')).toBe(true);
  });
});
