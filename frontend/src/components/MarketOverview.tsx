import MarketChart from "./MarketChart";
import SymbolSelector from "./SymbolSelector";
import MarketSummaryCards from "./MarketSummaryCards";

import type {
  LatestPrice,
  MarketHistoryItem,
  MarketSummary,
} from "../types/market";

interface MarketOverviewProps {
  selectedSymbol: string;
  onSymbolChange: (symbol: string) => void;
  latestPrice: LatestPrice | null;
  marketSummary: MarketSummary | null;
  marketHistory: MarketHistoryItem[];
  loading: boolean;
  error: string | null;
}

function MarketOverview({
  selectedSymbol,
  onSymbolChange,
  latestPrice,
  marketSummary,
  marketHistory,
  loading,
  error,
}: MarketOverviewProps) {
  return (
    <section>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Market Overview
          </h2>

          <p className="mt-2 text-slate-400">
            Latest market insights and price trends
          </p>
        </div>

        <SymbolSelector
          selectedSymbol={selectedSymbol}
          onSymbolChange={onSymbolChange}
        />
      </div>

      {loading && (
        <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900 p-6 text-slate-400">
          Loading market data...
        </div>
      )}

      {error && (
        <div className="mt-8 rounded-lg border border-red-900 bg-red-950/30 p-6 text-red-400">
          {error}
        </div>
      )}

      {!loading &&
        !error &&
        latestPrice &&
        marketSummary && (
          <div className="mt-8">
            <MarketSummaryCards
              latestPrice={latestPrice}
              marketSummary={marketSummary}
            />

            <div className="mt-6">
              <MarketChart data={marketHistory} />
            </div>
          </div>
        )}
    </section>
  );
}

export default MarketOverview;