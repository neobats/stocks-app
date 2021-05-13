import React, { useContext } from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import { StockDetailsNavigationProp } from "../types/StackNavigation"
import { StockContext } from "../utils/StockContext"

export const StockDetailScreen: React.FC<StockDetailsNavigationProp> = () => {
  const { stock } = useContext(StockContext)
  return (
    <View>
      <Text h1>{stock?.name}</Text>
    </View>
  )
}
