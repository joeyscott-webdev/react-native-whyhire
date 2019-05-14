//import libs
import React from 'react';
import { Text, View } from 'react-native';

//make component
// PROPS
// headerText :  The text to be displayed in the header of the application
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{'\u26A1'}{props.headerText}{'\u26A1'}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    color: '#CC0000',
    fontSize: 24,
    fontWeight: '600',
    textShadowColor: '#000',
    textShadowRadius: 5
  }
};

//export component
export default Header;