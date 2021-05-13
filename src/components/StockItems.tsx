import React from "react"
import { ListItem } from "react-native-elements"
import { QuoteResponse } from "../types/Stock"

type Props = {
  items: QuoteResponse[]
  handlePress: (stock: QuoteResponse) => void
}

export const StockItems: React.FC<Props> = ({ handlePress, items }) => {
  const handleItemPress = (item: QuoteResponse) => {
    console.log(item.name)
    console.log(item.symbol)
    handlePress(item)
  }
  return (
    <>
      {items.map((stock, index) => (
        <ListItem
          key={`listItem${index}`}
          onPress={() => handleItemPress(stock)}
        >
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
