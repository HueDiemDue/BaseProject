import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)

    this.state = {
    }
  }

  componentDidAppear() {
    if (!this.didAppearFirst) {
      this.didAppearFirst = true
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.body}>
          <Text>HomeScreen</Text>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center'
  },
})
