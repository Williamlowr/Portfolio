import { lazy, Suspense } from "react";

const Analytics = lazy(() =>
  import("@vercel/analytics/react").then(m => ({ default: m.Analytics }))
);

const SpeedInsights = lazy(() =>
  import("@vercel/speed-insights/react").then(m => ({ default: m.SpeedInsights }))
);

export default function AnalyticsComponent() {
  return (
    <Suspense fallback={null}>
      <Analytics />
      <SpeedInsights />
    </Suspense>
  );
}