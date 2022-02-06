import React, {useState, useContext} from 'react';
import {View, Dimensions} from 'react-native';
import Animated, {interpolate} from 'react-native-reanimated';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import HomeScreen from './src/screens/home/HomePage';
import {Avatar} from 'react-native-image-avatars';

import OtherScreen from './src/screens/OtherScreen';
import {withFancyDrawer} from './src/screens/withFancyHeader';
import HeaderTitle from './src/components/header/HeaderTtile';

import {Icon} from 'react-native-elements';
// import Ionicons from 'react-native-vector-icons/Ionicons';

export const THEME_COLOR = '#0069fe';

// We are gonna use react Context to passe the progress animated Value
// from react-navigation drawer to the Wrapper
export const AnimatedContext = React.createContext(void 0);

const Drawer = createDrawerNavigator();

/**
 * The drawer itself
 */
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <FakeDrawerHeader>
        {/* <AppTitle>FancyDrawer</AppTitle> */}
        <HeaderTitle />
      </FakeDrawerHeader>
      <DrawerItemList
        inactiveBackgroundColor={'transparent'}
        inactiveTintColor={'white'}
        activeBackgroundColor={'#FFFFFF88'}
        activeTintColor={'white'}
        {...props}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  return (
    <AnimatedContext.Provider value={animatedValue}>
      <View style={{backgroundColor: THEME_COLOR, flex: 1}}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{
              backgroundColor: 'transparent',
            }}
            drawerType={'slide'}
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
            {/* <Drawer.Screen
              name="OtherScreen"
              component={withFancyDrawer(OtherScreen)}
            /> */}

            {/* <AppTitle>FancyDrawer</AppTitle> */}
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
