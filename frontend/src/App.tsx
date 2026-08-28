import { useState } from "react";

import Header from "./components/Header";
import MarketOverview from "./components/MarketOverview";
import ResearchSection from "./components/ResearchSection";

import { useMarketData } from "./hooks/useMarketData";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState("NVDA");

  const {
    latestPrice,
    marketSummary,
    marketHistory,
    loading,
    error,
  } = useMarketData(selectedSymbol);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <MarketOverview
          selectedSymbol={selectedSymbol}
          onSymbolChange={setSelectedSymbol}
          latestPrice={latestPrice}
          marketSummary={marketSummary}
          marketHistory={marketHistory}
          loading={loading}
          error={error}
        />

        <ResearchSection />
      </div>
    </main>
  );
}

export default App;