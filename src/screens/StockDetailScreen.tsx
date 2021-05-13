import React from "react"
import { StyleSheet, View } from "react-native"
import { Card, Divider, Icon, ListItem, Text } from "react-native-elements"
import {
  StockDetailsNavigationProp,
  StockDetailsRouteProp,
} from "../types/StackNavigation"

type Props = {
  navigation: StockDetailsNavigationProp
  route: StockDetailsRouteProp
}

export const StockDetailScreen: React.FC<Props> = ({ route }) => {
  const { stock } = route.params

  const renderCommonProperties = () => {
    const { high, low, averageVolume } = stock
    return (
      <>
        <ListItem>
          <Icon name="arrow-upward" />
          <ListItem.Content>
            <Text>High: {high}</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Icon name="arrow-downward" />
          <ListItem.Content>
            <Text>Low: {low}</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Icon name="bar-chart" type="feather" />
          <ListItem.Content>
            <Text>Average Volume: {averageVolume}</Text>
          </ListItem.Content>
        </ListItem>
      </>
    )
  }

  return (
    <View style={styles.container}>
      {stock && (
        <View>
          <View>
            <Text h2 style={styles.title}>
              {stock.symbol} | {stock.name}
            </Text>
            <Divider />
          </View>
          <Card>
            {renderCommonProperties()}
            {/* <ListItem>
              <ListItem.Content>
                <Text>High Price: {stock.high}</Text>
              </ListItem.Content>
            </ListItem> */}
          </Card>
        </View>
      )}
      {!stock && (
        <View>
          <Text h3 style={styles.errorText}>
            We encountered an error. Sorry about that!
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    backgroundColor: "white",
    textAlign: "center",
  },
  errorText: {
    color: "#850101",
  },
})
