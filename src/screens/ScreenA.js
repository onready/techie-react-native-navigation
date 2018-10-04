import React, { PureComponent } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class ScreenA extends PureComponent {

  navigate = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen A</Text>
        <Button title='Go to B' onPress={this.navigate}/>
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