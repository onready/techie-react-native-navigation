import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ScreenD extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen D</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})