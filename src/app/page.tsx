import { MetricCard } from "@/components/cards/metric-card";
import { mockMetrics } from "@/lib/mockData";
import { Users, DollarSign, TrendingUp, Percent } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard title="Revenue" value={`$${mockMetrics.revenue}`} icon={<DollarSign />} />
      <MetricCard title="Users" value={mockMetrics.users.toString()} icon={<Users />} />
      <MetricCard title="Conversions" value={mockMetrics.conversions.toString()} icon={<TrendingUp />} />
      <MetricCard title="Growth" value={`${mockMetrics.growth}%`} icon={<Percent />} />
    </main>
  );
}