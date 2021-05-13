import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useStockQuote } from "./src/hooks/useStockQuote"
import { HomeScreen, StockDetailScreen } from "./src/screens"
import { StackNavigationParamList } from "./src/types/StackNavigation"
import { StockContext } from "./src/utils/StockContext"

export default function App() {
  const Stack = createStackNavigator<StackNavigationParamList>()

  const { stock } = useStockQuote("")
  let internalStock = stock ? stock[0] : null
  return (
    <SafeAreaProvider>
      <StockContext.Provider
        value={
          stock
            ? {
                stock: internalStock,
                setStock: (newStock) => {
                  internalStock = newStock
                },
              }
            : {
                stock: null,
                setStock: () => {
                  return
                },
              }
        }
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="StockDetails"
              component={StockDetailScreen}
              options={{ title: "Details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StockContext.Provider>
    </SafeAreaProvider>
  )
}
