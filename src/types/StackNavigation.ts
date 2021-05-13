import { StackNavigationProp } from "@react-navigation/stack"

export type StackNavigationParamList = {
  Home: undefined
  StockDetails: undefined
}

export type HomeNavigationProp = StackNavigationProp<
  StackNavigationParamList,
  "Home"
>

export type StockDetailsNavigationProp = StackNavigationProp<
  StackNavigationParamList,
  "StockDetails"
>
