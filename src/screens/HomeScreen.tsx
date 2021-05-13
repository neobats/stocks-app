import React, { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { Button, Icon, Input, Text } from "react-native-elements"
import { StockCard } from "../components/StockCard"
import { useStockQuote } from "../hooks/useStockQuote"

export const HomeScreen: React.FC = () => {
  const [input, setInput] = useState("")
  const [clean, setClean] = useState(true)
  const [endpoint, setEndpoint] = useState("")

  const { stock, error, loading } = useStockQuote(endpoint)

  useEffect(() => {
    if (clean && loading) {
      setClean(false)
    }
  }, [clean, loading])

  const handlePress = () => {
    const ticker = input.toLocaleUpperCase()
    setInput("")
    if (!endpoint) {
      setEndpoint(ticker)
      return
    }
    setEndpoint(endpoint.concat(`,${ticker}`))
    return
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} size="large" />
      {(clean || !stock) && (
        <View>
          <Text h1>Check your stocks!</Text>
        </View>
      )}
      <Text>
        {error ? "Hmm... We can&apos;t find information on that one." : null}
      </Text>
      {stock && (
        <View style={styles.wrapper}>
          <StockCard quotes={stock} />
        </View>
      )}
      <Input
        defaultValue={input}
        onChangeText={setInput}
        onFocus={() => {
          setInput("")
        }}
        placeholder={!stock ? "enter stock ticker" : "enter another ticker"}
        leftIcon={<Icon name="dollar-sign" type="feather" />}
      />
      <Button type="outline" title="Get Info" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "100%",
  },
})
