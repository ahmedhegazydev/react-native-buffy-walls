import React, {useState, useContext} from 'react';
import {
  View,
  Dimensions,
  Text,
  useWindowDimensions,
  Linking,
  ScrollView,
  FlatList,
} from 'react-native';
import Animated, {interpolate} from 'react-native-reanimated';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import HomeScreen from './src/screens/home/HomePage';
import {Avatar} from 'react-native-image-avatars';

import OtherScreen from './src/screens/OtherScreen';
import {withFancyDrawer} from './src/screens/withFancyHeader';
import HeaderTitle from './src/components/header/HeaderTtile';

import {Icon} from 'react-native-elements';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import IconShare from 'react-native-vector-icons/AntDesign';

import {TabBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerListItem from './src/components/DrawerListItem';

export const THEME_COLOR = '#0069fe';

// We are gonna use react Context to passe the progress animated Value
// from react-navigation drawer to the Wrapper
export const AnimatedContext = React.createContext(void 0);

const item = {title: 'Share', iconName: ''};

const Drawer = createDrawerNavigator();

const items = [
  {
    title: 'Share Our App',
    iconName: 'sharealt',
    key: '1',
  },
  {
    title: 'Clear Cache',
    iconName: 'delete',
    key: '2',
  },
];

/**
 * The drawer itself
 */
function CustomDrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        style={{
          flex: 1,
          // flexDirection: 'row',
          // backgroundColor: 'red',
          height: 400,
        }}>
        <FakeDrawerHeader>
          {/* <AppTitle>FancyDrawer</AppTitle> */}
          <HeaderTitle />
        </FakeDrawerHeader>
        {/* <DrawerItemList
          inactiveBackgroundColor={'transparent'}
          inactiveTintColor={'white'}
          activeBackgroundColor={'#FFFFFF88'}
          activeTintColor={'white'}
          {...props}
        /> */}

        {/* <DrawerListItem item={item} /> */}

        {/* {items.map((item, index) => {
          // console.log(item.title);
          <View key={item.key}>
            <DrawerListItem listItem={item} />
          </View>;
        })} */}

        <FlatList
          data={items}
          renderItem={({item}) => <DrawerListItem listItem={item} />}
        />
      </DrawerContentScrollView>
    </View>
  );
}

export default function App() {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const {width, height} = Dimensions.get('window');

  return (
    <AnimatedContext.Provider value={animatedValue}>
      <View style={{backgroundColor: THEME_COLOR, flex: 1}}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{
              backgroundColor: 'transparent',
            }}
            backBehavior={'none'}
            defaultStatus={'open'}
            // drawerType={'front'}
            // drawerType={'back'}
            drawerType={'slide'}
            // drawerType={'permanent'}

            // drawerContentOptions={{
            //   activeTintColor: 'red',
            //   activeBackgroundColor: 'grey',
            //   inactiveTintColor: 'blue',
            //   inactiveBackgroundColor: 'white',
            //   labelStyle: {
            //     marginLeft: 30,
            //   },
            // }}

            screenOptions={{
              drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            initialRouteName="Home"
            overlayColor="transparent"
            drawerContent={props => {
              setAnimatedValue(props.progress);
              return <CustomDrawerContent {...props} />;
            }}>
            <Drawer.Screen
              name="Home"
              component={withFancyDrawer(HomeScreen)}
              options={{
                title: 'Home',
                drawerIcon: ({focused, size}) => (
                  <Icon
                    name="rowing"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </AnimatedContext.Provider>
  );
}

const FakeDrawerHeader = styled.View`
  width: 100%;
  aspect-ratio: 1.5;
  align-items: center;
  justify-content: center;
`;
const AppTitle = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
`;
