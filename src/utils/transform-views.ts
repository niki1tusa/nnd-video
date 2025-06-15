export function transformViews(views: number): string {
  const formatNumber = (num: number): string => {
    const formatted = num.toFixed(1);
    return formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted;
  };

  if (views >= 1_000_000_000) {
    return `${formatNumber(views / 1_000_000_000)}B views`;
  } else if (views >= 1_000_000) {
    return `${formatNumber(views / 1_000_000)}M views`;
  } else if (views >= 1_000) {
    return `${formatNumber(views / 1_000)}K views`;
  } else {
    return `${views} views`;
  }
}
