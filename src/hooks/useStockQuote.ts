import { compose } from "lodash/fp"
import { useEffect, useState } from "react"
import { QuoteResponse } from "../types"
import baseUrl from "../utils/api-endpoint"
import { mapQuote } from "../utils/mapQuote"
import { useKey } from "./useKey"

const generateEndpoint = (key: string) => (symbol: string) =>
  `${baseUrl}/quote?symbol=${symbol}&apikey=${key}`

export const useStockQuote = (symbol: string) => {
  const [key] = useKey("prod")
  const [error, setError] = useState("")
  const [stock, setStock] = useState<QuoteResponse[] | null>(null)
  const [loading, setLoading] = useState(false)
  const createProductionEndpoint = generateEndpoint(key)

  useEffect(() => {
    const uri = compose(encodeURI, createProductionEndpoint)(symbol)
    const fetcher = async () => {
      setLoading(true)
      if (!symbol) {
        setLoading(false)
        return {
          stock,
          error,
          loading,
        }
      }
      return await fetch(uri)
        .then((res) => {
          const json = res.json()
          const status = res.status
          if (status < 200 || status > 299) {
            throw new Error(
              JSON.stringify({
                statusCode: status,
                message: "encountered an error",
              }),
            )
          }
          return json
        })
        .then((json) => {
          const quote: QuoteResponse[] = mapQuote(json) as QuoteResponse[]
          setStock(quote)
          setLoading(false)
        })
        .catch((err) => {
          setError(err)
          setStock(null)
          setLoading(false)
        })
    }
    fetcher()
  }, [symbol])
  return {
    stock,
    error,
    loading,
  }
}
