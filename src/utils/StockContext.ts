import React from "react"
import { QuoteResponse } from "../types"

type Context = {
  stock: QuoteResponse | null
  setStock: (v: QuoteResponse) => void
}
export const StockContext = React.createContext<Context>({
  stock: null,
  setStock: (_v) => {
    return
  },
})
