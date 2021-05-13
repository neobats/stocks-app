import React from "react"
import { QuoteResponse } from "../types"

type Context = {
  stocks: QuoteResponse[] | null
  setStocks: (v: QuoteResponse[]) => void
}
export const StockContext = React.createContext<Context>({
  stocks: null,
  setStocks: (_v) => {
    return
  },
})
