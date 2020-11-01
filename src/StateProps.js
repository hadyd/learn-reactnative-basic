import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, PushNotificationIOS} from 'react-native';
import Operan from './Operan';

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Hadyd',
    };
  }

  changeState() {
    this.setState({
      name: 'Al',
    });
  }
  render() {
    const {name} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar State & Props </Text>
        <View style={styles.line} />

        <View style={styles.content}></View>
        <Text>Ini adalah state: {name}</Text>
        <Operan name ={name}/>

        <TouchableOpacity
          style={styles.tombol}
          onPress={() => this.changeState()}>
          <Text style={{textAlign: 'center'}}>Ganti State</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  content: {
    marginTop: 10,
  },
  tombol: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
