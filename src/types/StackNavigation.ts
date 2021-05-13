import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { QuoteResponse } from "./Stock"

export type StackNavigationParamList = {
  Home: undefined
  StockDetails: { stock: QuoteResponse }
}

export type HomeNavigationProp = StackNavigationProp<
  StackNavigationParamList,
  "Home"
>

export type StockDetailsRouteProp = RouteProp<
  StackNavigationParamList,
  "StockDetails"
>

export type StockDetailsNavigationProp = StackNavigationProp<
  StackNavigationParamList,
  "StockDetails"
>
