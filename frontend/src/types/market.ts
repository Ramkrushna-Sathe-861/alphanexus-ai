export interface LatestPrice {
  symbol: string;
  date: string;
  close: number;
}

export interface MarketSummary {
  symbol: string;
  total_days: number;
  lowest_close: number;
  highest_close: number;
  average_close: number;
}

export interface MarketHistoryItem {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface MarketHistoryResponse {
  symbol: string;
  data: MarketHistoryItem[];
}