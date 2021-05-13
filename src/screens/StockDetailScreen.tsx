import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import { QuoteResponse } from "../types/Stock"

export const StockDetailScreen: React.FC<{ data: QuoteResponse }> = ({
  data,
}) => {
  return (
    <View>
      <Text h1>{data.name}</Text>
    </View>
  )
}
