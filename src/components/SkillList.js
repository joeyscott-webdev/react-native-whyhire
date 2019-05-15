import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class SkillList extends Component {
  componentWillMount() {
    axios.get('https://joeywebdev.com/skills.json')
      .then(response => {
        this.setState({ skills: response.data });
        //console.log(this.state.albums);
        console.log(response);
      })
      .then(error => console.log(error));
  }


  render() {
    return (
      <View>
        <Text>Skill List!!!</Text>
      </View>
    );
  }

}

export default SkillList;