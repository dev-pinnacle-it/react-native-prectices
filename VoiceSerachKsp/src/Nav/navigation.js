import React from 'react';
import { Button, View, Text } from 'react-native';
import { createSwitchNavigator,createAppContainer  } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import VoiceSearch from '../components/voice-search';
import App from '../App';
import MapScreen from '../components/map-screen';
import QrScreen from '../components/qr-scanner';

import CemeraShow from '../components/cemera-show';
import VedioPlay from '../components/vedio-play';
// // export default class App extends React.Component {
//   render() {
//     // switch between Stack and Switch navigator
//     //return <MySwitchNavigator />;
//     return <MyStackNavigator />;
//   }
// }

const FirstActivity=createStackNavigator({
    routeOne:{
        screen:App
    },
    routeTwo:
    {
        screen:VoiceSearch
    },
    Map:
    {
        screen: MapScreen
    },

    QR:
    {
        screen: QrScreen
    }, 
    CM:
    {
        screen:CemeraShow
    },
     VD:
    {
        screen:VedioPlay
    }
    // Cemera:
    // {
    //     screen: CemeraShow
    // }, 
});



// Notice the head and back link on top of the screen

export default createAppContainer(
    createSwitchNavigator(
        {
        routeOne: FirstActivity,
        routeTwo: VoiceSearch,
        },
        {
          initialRouteName: 'routeOne',
        }
      )
  );