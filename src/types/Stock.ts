export interface StockQuery {
  symbol: string
  name: string
  country: string
  currency: string
  exchange: string
  type: string
}

export interface QuoteResponse {
  averageVolume: string
  change: string
  currency: string
  datetime: string
  exchange: string
  fiftyTwoWeek: {
    high: string
    highChangePercent: string
    low: string
    lowChangePercent: string
    range: string
  }
  high: string
  low: string
  name: string
  open: string
  percentChange: string
  previousClose: string
  symbol: string
  volume: string
}
