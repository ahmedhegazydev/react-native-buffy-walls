import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {Avatar} from 'react-native-image-avatars';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';

import {Divider} from 'react-native-elements';

// import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/Ionicons';
import IconForward from 'react-native-vector-icons/AntDesign';

const HeaderTitle = props => {
  const supportedURL = 'https://google.com';
  const unsupportedURL = 'slack://open?team=123456';

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);

  return (
    <View
      style={{
        marginBottom: 10,
        marginTop: 10,
      }}>
      <HeaderTitleView>
        <TouchableHighlight
          style={{
            marginTop: 30,
            marginRight: 70,
          }}
          onPress={handlePress}
          underlayColor="#00000000">
          <Avatar
            imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size="small"
            borderColor="#f2f2f2"
            shadow
          />
        </TouchableHighlight>
        <View>
          <IconForward name="rightcircleo" size={20} color="#000000" />
        </View>
      </HeaderTitleView>
      <Divider />
    </View>
  );
};

export default HeaderTitle;

const HeaderTitleView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  // justify-content: space-around;
  // justify-content: space-between;
  // justify-content: space-evenly;

  // margin-start: 30px;
  // margin-end: 30px;

  // background-color: orange;
`;

const Square = styled.View`
  height: 100px;
  aspect-ratio: 1;
  background-color: orange;
`;
