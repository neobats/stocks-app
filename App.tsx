import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useStockQuote } from "./src/hooks/useStockQuote"
import { HomeScreen, StockDetailScreen } from "./src/screens"
import { StockContext } from "./src/utils/StockContext"

export default function App() {
  const Stack = createStackNavigator()

  let { stock } = useStockQuote("")

  return (
    <SafeAreaProvider>
      <StockContext.Provider
        value={
          stock
            ? {
                stocks: stock,
                setStocks: (newStock) => {
                  stock = newStock
                },
              }
            : {
                stocks: null,
                setStocks: () => {
                  return
                },
              }
        }
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={StockDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StockContext.Provider>
    </SafeAreaProvider>
  )
}
