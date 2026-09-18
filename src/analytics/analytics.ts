export type AnalyticsEvent = 'landing_view' | 'analysis_started' | 'analysis_completed' | 'analysis_failed' | 'issue_selected' | 'contribution_plan_viewed' | 'deep_analysis_interest' | 'repository_analyzed' | 'repeat_analysis';
export type AnalyticsProperties = Readonly<Record<string, string | number | boolean>>;
export interface AnalyticsProvider { track(event: AnalyticsEvent, properties?: AnalyticsProperties): void; }

/** No network transport is included. A provider may be wired in after privacy review and user validation. */
export function createAnalytics(provider?: AnalyticsProvider): AnalyticsProvider {
  if (provider) return provider;
  return { track(event, properties) { if (import.meta.env.DEV) console.info('[navigator analytics]', event, properties ?? {}); } };
}

export const analytics = createAnalytics();
