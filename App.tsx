import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HomeScreen, StockDetailScreen } from "./src/screens"
import { StackNavigationParamList } from "./src/types/StackNavigation"

export default function App() {
  const Stack = createStackNavigator<StackNavigationParamList>()

  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  )
}
