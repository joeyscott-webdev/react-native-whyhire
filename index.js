//import lib for component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import SkillList from './src/components/SkillList';

//create component
const App = () => {
  return (
    <View>
      <Header headerText={'WhyHIRE'} />
      <SkillList />
    </View>
  );
};

//render
AppRegistry.registerComponent('whyhire', () => App);