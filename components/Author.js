/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Author = props => {
  return (
    <View style={styles.authorName}>
      <Text style={styles.author}> {props.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  authorName: {
    shadowColor: 'black',
    borderColor: '#545454',
    borderWidth: 2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: '#d6d6d6',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  author: {
    fontSize: 20,
    fontWeight: 'bold',

    padding: 10,

    fontFamily: 'fantasy',
    color: 'black',
  },
});

export default Author;
