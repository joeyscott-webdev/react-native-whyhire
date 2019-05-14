//import lib for component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/Header';

//create component
const App = () => {
  return (
    <Header headerText={'WhyHIRE'} />
  );
};

//render
AppRegistry.registerComponent('whyhire', () => App);