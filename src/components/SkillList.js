import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SkillList extends Component {
  state = { skills: [] };

  componentWillMount() {
    fetch('https://joeywebdev.com/skills.json')
    .then((response) => response.json())
    .then((responseJson) => this.setState({ skills: responseJson }))
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    console.log(this.state);
    
    return (
      <View>
        <Text>Skill List!!!</Text>
      </View>
    );
  }

}

export default SkillList;
