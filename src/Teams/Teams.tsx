import React, {useEffect, useState} from 'react';
import {
  useColorScheme,
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Teams: React.FC<any> = ({navigation}) => {
  const [listData, setListData] = useState([]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const url = 'http://localhost:3000/teams';

  fetch(url).then(res => {
    console.log(res.json());

    res.json();
  });

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetch(url);

      const body = await data.json();

      const list = body.data.map(item => {
        return {
          id: item.id,
          name: item.full_name,
          abbr: item.abbreviation,
        };
      });

      setListData(list);
    };

    getTeams().catch(console.error);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <FlatList
          data={listData}
          renderItem={({item}) => (
            <>
              <Text
                style={styles.item}
                onPress={() => navigation.navigate('Team', {item: item.name})}>
                {item.name}
              </Text>
            </>
          )}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
