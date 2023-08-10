import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card} from '@rneui/themed';
import Reactotron from 'reactotron-react-native';

export const Team: React.FC<any> = ({route, navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 22,
      // justifyContent: 'flex-start',
      // alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  const [logo, setLogo] = useState<string>('https://placehold.co/200');
  const isDarkMode = useColorScheme() === 'dark';
  const url = 'http://localhost:3000/teams';

  useEffect(() => {
    const getTeamLogo = async () => {
      const data = await fetch(`${url}/${route.params.item.id}`);

      const body = await data.json();

      const logo = body.data.logo;

      setLogo(logo);
    };

    getTeamLogo().catch(console.error);
  }, [route.params.item.id]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  Reactotron.log(route.params.item);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
        <Card>
          <Card.Title>{route.params.item.name}</Card.Title>
          <Card.Divider />
          <View style={styles.imageContainer}>
            <Image style={styles.image} src={logo} />
          </View>
          <Text> {'\n'}</Text>
          <Text> {'\n'}</Text>
          <Text> {'\n'}</Text>
          <Text numberOfLines={4}>Based in {route.params.item.city}</Text>

          <Text numberOfLines={4}>{route.params.item.division} Division</Text>
          <Text numberOfLines={4}>
            {route.params.item.conference}ern Conference
          </Text>
        </Card>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
