/**
 * Product capabilities are named here, rather than hidden in checkout logic.
 * There is intentionally no entitlement or payment check in the zero-cost MVP.
 */
export const FeatureId = {
  BasicRepositoryAnalysis: 'BASIC_REPOSITORY_ANALYSIS',
  BasicIssueRecommendations: 'BASIC_ISSUE_RECOMMENDATIONS',
  BasicContributionPath: 'BASIC_CONTRIBUTION_PATH',
  DeepIssueAnalysis: 'DEEP_ISSUE_ANALYSIS',
  ContributionRoadmap: 'CONTRIBUTION_ROADMAP',
  AdvancedCodebaseMapping: 'ADVANCED_CODEBASE_MAPPING',
  AdvancedReadinessAnalysis: 'ADVANCED_READINESS_ANALYSIS',
  HigherAnalysisLimits: 'HIGHER_ANALYSIS_LIMITS',
} as const;

export type FeatureId = typeof FeatureId[keyof typeof FeatureId];
export type FeatureDefinition = { id: FeatureId; name: string; availability: 'available' | 'planned'; summary: string };

export const features: Record<FeatureId, FeatureDefinition> = {
  [FeatureId.BasicRepositoryAnalysis]: { id: FeatureId.BasicRepositoryAnalysis, name: 'Repository analysis', availability: 'available', summary: 'Public metadata, stack, and activity signals.' },
  [FeatureId.BasicIssueRecommendations]: { id: FeatureId.BasicIssueRecommendations, name: 'Issue recommendations', availability: 'available', summary: 'Evidence-led matches from the current issue sample.' },
  [FeatureId.BasicContributionPath]: { id: FeatureId.BasicContributionPath, name: 'Contribution path', availability: 'available', summary: 'Files, concepts, tests, rules, and blockers where evidence exists.' },
  [FeatureId.DeepIssueAnalysis]: { id: FeatureId.DeepIssueAnalysis, name: 'Deep contribution analysis', availability: 'planned', summary: 'Broader issue context, readiness checks, and detailed preparation.' },
  [FeatureId.ContributionRoadmap]: { id: FeatureId.ContributionRoadmap, name: 'Contributor roadmap', availability: 'planned', summary: 'A progression from prerequisite concepts to increasingly complex work.' },
  [FeatureId.AdvancedCodebaseMapping]: { id: FeatureId.AdvancedCodebaseMapping, name: 'Advanced codebase mapping', availability: 'planned', summary: 'More complete dependency and context tracing.' },
  [FeatureId.AdvancedReadinessAnalysis]: { id: FeatureId.AdvancedReadinessAnalysis, name: 'Contribution readiness', availability: 'planned', summary: 'Focused verification of gaps, local checks, and likely review concerns.' },
  [FeatureId.HigherAnalysisLimits]: { id: FeatureId.HigherAnalysisLimits, name: 'Higher analysis limits', availability: 'planned', summary: 'Repeated and deeper analysis when real demand validates it.' },
};

export const freeFeatureIds: FeatureId[] = [FeatureId.BasicRepositoryAnalysis, FeatureId.BasicIssueRecommendations, FeatureId.BasicContributionPath];
export const futureDeepFeatureIds: FeatureId[] = [FeatureId.DeepIssueAnalysis, FeatureId.AdvancedCodebaseMapping, FeatureId.AdvancedReadinessAnalysis, FeatureId.ContributionRoadmap, FeatureId.HigherAnalysisLimits];
export const isAvailable = (id: FeatureId) => features[id].availability === 'available';
