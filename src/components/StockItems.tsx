import React from "react"
import { ListItem } from "react-native-elements"
import { QuoteResponse } from "../types/Stock"

export const StockItems: React.FC<{ items: QuoteResponse[] }> = ({ items }) => {
  const handlePress = (item: QuoteResponse) => {
    console.log(item.name)
    console.log(item.symbol)
  }
  return (
    <>
      {items.map((stock, index) => (
        <ListItem key={`listItem${index}`} onPress={() => handlePress(stock)}>
          <ListItem.Content>
            <ListItem.Title>{stock.name}</ListItem.Title>
            <ListItem.Subtitle>{stock.symbol}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </>
  )
}
