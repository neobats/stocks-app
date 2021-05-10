import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  const [input, setInput] = useState("")
  const [confirmed, setConfirmed] = useState("")

  const handlePress = () => {
    setConfirmed(input)
  }
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <TextInput defaultValue={input} onChangeText={setInput} />
        <TouchableOpacity onPress={handlePress}>Go</TouchableOpacity>
        <Text>{confirmed}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
