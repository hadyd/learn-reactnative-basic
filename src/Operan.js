import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class Operan extends Component {
  render() {
    const {name} = this.props;
    return (
      <View>
        <Text>Ini adalah Props {name} </Text>
      </View>
    );
  }
}

export default Operan;
