/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useCallback} from 'react';

import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  RefreshControl,
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
// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };
const Images = props => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: props.url}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: 'black',
    borderColor: 'green',
    borderWidth: 2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 1,
    backgroundColor: '#d6d6d6',
    padding: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
});

export default Images;
