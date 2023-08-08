/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Teams({navigation}): JSX.Element {
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

  const listData = [
    {name: 'GSW'},
    {name: 'DET'},
    {name: 'LAL'},
    {name: 'LAC'},
    {name: 'POR'},
    {name: 'CHI'},
    {name: 'MIA'},
    {name: 'MIL'},
  ];
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
}
function Team({navigation, route}): JSX.Element {
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

  // const listData = [
  //   {name: 'Eugene'},
  //   {name: 'Spencer'},
  //   {name: 'May'},
  //   {name: 'Keith'},
  //   {name: 'Beth'},
  //   {name: 'Tim'},
  //   {name: 'Jean'},
  //   {name: 'Wilson'},
  // ];
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
        {/* <FlatList
          data={listData}
          renderItem={({item}) => (
            <>
              <Text
                style={styles.item}
                onPress={navigation.navigate('Details')}>
                {item.name}
              </Text>
            </>
          )}
        /> */}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

function New(): JSX.Element {
  return (
    <Text
      style={[
        styles.sectionTitle,
        {
          color: Colors.black,
        },
      ]}>
      {'This is the new title'}
    </Text>
  );
}
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen
          name="Team"
          options={({route}) => ({title: route?.params?.item})}>
          {props => <Team {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
