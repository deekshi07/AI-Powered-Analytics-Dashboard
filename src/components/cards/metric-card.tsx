import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="hover:shadow-lg transition duration-300">
      <CardContent className="flex justify-between items-center py-4">
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        {icon}
      </CardContent>
    </Card>
  );
}