import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'

interface Props {}

interface State {
  text: string;
}

class WelcomeScreen extends Component<Props, State> {
  public state = {
    text: '',
  };

  public render () {
    const { text } = this.state
    return (
      <View testID="welcome" style={styles.container}>
        <Text style={styles.welcome}>TypeScript Detox Example</Text>
        <Button testID="button" title="Tap Me!" onPress={this.displayAlert} />
        <Text>Type some stuff below</Text>
        <TextInput
          testID="textInput"
          value={text}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.updateText}
        />
        <Text>The above but reversed: {'\n'}</Text>
        <Text testID="reversedText" style={styles.reversedText}>
          {this.reverseText(text)}
        </Text>
      </View>
    )
  }

  private displayAlert = () => Alert.alert('Hello World!');

  private updateText = (text: string) => this.setState({ text });

  private reverseText = (text: string): string => {
    return text
      .split('')
      .reverse()
      .join('')
  };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  reversedText: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
})

export default createAppContainer(AppNavigator)
