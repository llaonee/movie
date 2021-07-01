import React from 'react';
// import {StatusBar} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import DetailMovie from './src/screens/DetailMovie';

const AppStack = createStackNavigator({
  Splash          : {screen                 : Splash},
  Home            : {screen                 : Home},
  DetailMovie     : {screen                 : DetailMovie}
  },
  { 
    headerMode: 'none' }
);

const AppContainer = createAppContainer(AppStack);

const App = () => {
  return (
      <AppContainer/>
  );
}

export default App;