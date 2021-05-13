import React from "react"
import { Card } from "react-native-elements"
import { QuoteResponse } from "../types"
import { StockItems } from "./StockItems"

type Props = {
  quotes: QuoteResponse[]
}
export const StockCard: React.FC<Props> = ({ quotes }) => {
  return (
    <Card>
      <Card.Title>Your Stock Quotes</Card.Title>
      <Card.Divider />
      <StockItems items={quotes} />
    </Card>
  )
}
