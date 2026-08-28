import { useEffect, useState } from "react";

import {
  getLatestPrice,
  getMarketSummary,
  getMarketHistory,
} from "../services/marketApi";

import type {
  LatestPrice,
  MarketSummary,
  MarketHistoryItem,
} from "../types/market";



export function useMarketData(symbol: string) {
  const [latestPrice, setLatestPrice] =
    useState<LatestPrice | null>(null);

  const [marketSummary, setMarketSummary] =
    useState<MarketSummary | null>(null);

  const [marketHistory, setMarketHistory] =
    useState<MarketHistoryItem[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] =
    useState<string | null>(null);


    async function fetchMarketData() {
    try {
        setLoading(true);
        setError(null);

        const [latestData, summaryData, historyData] =
        await Promise.all([
            getLatestPrice(symbol),
            getMarketSummary(symbol),
            getMarketHistory(symbol),
        ]);

        setLatestPrice(latestData);
        setMarketSummary(summaryData);
        setMarketHistory(historyData.data);

    } catch (error) {
        setError("Failed to fetch market data");
    } finally {
        setLoading(false);
    }
    }

        useEffect(() => {
    fetchMarketData();
    }, [symbol]);

    return {
        latestPrice,
        marketSummary,
        marketHistory,
        loading,
        error,
        };
}