import type {
  LatestPrice,
  MarketSummary,
} from "../types/market";

interface MarketSummaryCardsProps {
  latestPrice: LatestPrice;
  marketSummary: MarketSummary;
}

function MarketSummaryCards({
  latestPrice,
  marketSummary,
}: MarketSummaryCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">
          Latest Price
        </p>

        <p className="mt-2 text-2xl font-bold">
          ${latestPrice.close.toFixed(2)}
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">
          30-Day High
        </p>

        <p className="mt-2 text-2xl font-bold text-green-400">
          ${marketSummary.highest_close.toFixed(2)}
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">
          30-Day Low
        </p>

        <p className="mt-2 text-2xl font-bold text-red-400">
          ${marketSummary.lowest_close.toFixed(2)}
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <p className="text-sm text-slate-400">
          Average Price
        </p>

        <p className="mt-2 text-2xl font-bold">
          ${marketSummary.average_close.toFixed(2)}
        </p>
      </div>

    </div>
  );
}

export default MarketSummaryCards;