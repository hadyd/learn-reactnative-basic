import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class DesignTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Design Tampilan & Flexbox </Text>
        <View style={styles.line} />

        <View style={styles.content}>

        <Text style={styles.contentTitle}>Flex Direction Column (Horizontal)</Text>
          <View>
            <View style={styles.greenbox} />
            <View style={styles.bluebox} />
            <View style={styles.redbox} />
          </View>

          <Text style={styles.contentTitle}>Flex Direction Row (Vertikal)</Text>
          <View style={styles.flexVertikal}>
            <View style={styles.greenbox} />
            <View style={styles.bluebox} />
            <View style={styles.redbox} />
          </View>

          <Text style={styles.contentTitle}>Justify Content</Text>
          <View style= {{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.greenbox} />
            <View style={styles.bluebox} />
            <View style={styles.redbox} />
          </View>

          <Text style={styles.contentTitle}>Align Items</Text>
          <View style= {{flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.greenbox} />
            <View style={styles.bluebox} />
            <View style={styles.redbox} />
          </View>
        </View>
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
  flexVertikal: {
    flexDirection: 'row',
  },
  greenbox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    marginRight: 5,
    marginBottom: 5,
  },
  bluebox: {
    width: 50,
    height: 35,
    backgroundColor: 'blue',
    marginRight: 5,
    marginBottom: 5,
  },
  redbox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    marginBottom: 5,
  },
  contentTitle: {
    marginBottom: 15,
    marginTop: 15
  },
});
