import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface MarketHistoryItem {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface MarketChartProps {
  data: MarketHistoryItem[];
}

function MarketChart({ data }: MarketChartProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">
        Price History
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="close"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MarketChart;