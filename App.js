import React, {useEffect, useState, useRef} from 'react';

import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Image,
  Dimensions,
} from 'react-native';

import Images from './components/Images';
import Author from './components/Author';
const App = () => {
  // const [imageUrl, setImageUrl] = useState([]);
  // const [authorName, setAuthorName] = useState([]);
  const {width, height} = Dimensions.get('screen');

  const [apiResponse, setApiResponse] = useState([]);
  useEffect(() => {
    const apiUrl = 'https://picsum.photos/list';
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        // const urlArr = res.map(item => {
        //   {
        //     return `https://picsum.photos/400/600?image=${item.id}`;
        //   }
        // });
        const apiArr = res.map(item => {
          {
            return {id: item.id, author: item.author};
          }
        });
        // console.log(urlArr.length);
        setApiResponse(apiArr);
      });
  }, []);
  const [refreshing, setRefreshing] = useState(false);
  const [startPointer, setStartPointer] = useState(0);

  const refContainer = useRef();

  const fetchData = info => {
    // console.log('In fetchdata', info);

    refContainer.current.scrollToOffset({
      offset: info.averageItemLength * info.index,
      animated: true,
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    // fetchData();
    setStartPointer(Math.floor(Math.random() * apiResponse.length));
    // console.log('hijsj', startPointer);
    refContainer.current.scrollToIndex({index: startPointer, animated: true});
    console.log('Refreshing');
    setRefreshing(false);
  };

  return (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ref={refContainer}
      horizontal
      onScrollToIndexFailed={fetchData}
      data={apiResponse}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Author author={item.author} />
            <Images url={`https://picsum.photos/400/600?image=${item.id}`} />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default App;
