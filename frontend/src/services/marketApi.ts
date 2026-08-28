import type {
  LatestPrice,
  MarketSummary,
  MarketHistoryResponse
} from "../types/market";

const API_BASE_URL = "http://127.0.0.1:8000";


export async function getLatestPrice(
  symbol: string
): Promise<LatestPrice> {
  const response = await fetch(
    `${API_BASE_URL}/market/latest/${symbol}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch latest price");
  }

  return response.json();
}

export async function getMarketSummary(
  symbol: string
): Promise<MarketSummary> {
  const response = await fetch(
    `${API_BASE_URL}/market/summary/${symbol}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch market summary");
  }

  return response.json();
}

export async function getMarketHistory(
  symbol: string
): Promise<MarketHistoryResponse> {
  const response = await fetch(
    `${API_BASE_URL}/market/history/${symbol}?limit=30`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch market history");
  }

  return response.json();
}