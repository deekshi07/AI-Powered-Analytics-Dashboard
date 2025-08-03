export const mockMetrics = {
  revenue: 92000,
  users: 13450,
  conversions: 3400,
  growth: 12.5,
};

export const mockChartData = [
  { month: 'Jan', users: 1200, conversions: 300 },
  { month: 'Feb', users: 1500, conversions: 380 },
  ...
];

export const mockTableData = [...Array(25)].map((_, i) => ({
  id: i + 1,
  name: `Campaign ${i + 1}`,
  status: i % 2 === 0 ? 'Active' : 'Paused',
  ctr: `${(Math.random() * 5).toFixed(2)}%`,
  impressions: Math.floor(Math.random() * 10000),
}));
