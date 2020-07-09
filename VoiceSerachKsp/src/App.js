//Example to Convert Speech to Text in React Native - Voice Recognition
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  ScrollView,
  Button,
} from 'react-native';

class App extends Component {
  state = {
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
  };

  constructor(props) {
    super(props);
    }

  render() {
   return (
      <View style={{padding:10,justifyContent:'space-around'}}>
        <Button title='Search' onPress={()=>{this.props.navigation.navigate('routeTwo')}}></Button>
        <Button title='Map' onPress={()=>{this.props.navigation.navigate('Map')}}></Button>
        <Button title='QR Scanner' onPress={()=>{this.props.navigation.navigate('QR')}}></Button>
        <Button title='Camera' onPress={()=>{this.props.navigation.navigate('CM')}}></Button>
        <Button title='Vedio Play' onPress={()=>{this.props.navigation.navigate('VD')}}></Button>
      </View>
    );
  }
}

export default App;