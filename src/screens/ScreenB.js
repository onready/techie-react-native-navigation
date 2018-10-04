import React, { PureComponent } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class ScreenB extends PureComponent {

  navigate = () => {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Screen B</Text>
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