import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {Avatar} from 'react-native-image-avatars';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  Dimensions,
  Text,
} from 'react-native';

import {Divider} from 'react-native-elements';
import PropTypes from 'prop-types';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

// import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/Ionicons';
import IconShare from 'react-native-vector-icons/AntDesign';

const DrawerListItem = ({listItem}) => {
  //   console.log(listItem.title);
  console.log(listItem);

  //   static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     isYummy: PropTypes.bool.isRequired
  //   }

  return (
    <View
      style={
        {
          // marginBottom: 30,
        }
      }>
      <DrawerItem
        icon={() => (
          <IconShare
            name={listItem.iconName}
            size={20}
            style={
              {
                // paddingStart: 10
              }
            }
          />
        )}
        // label="Share Our App"
        label={() => (
          <Text style={{color: '#000000', fontSize: 20}}>{listItem.title}</Text>
        )}
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
        style={
          {
            //borderBottomWidth: 1,
            //borderRadius: 0,
            // borderColor: '#ccc',
            // backgroundColor: '#f9f9f9',
          }
        }
      />
    </View>
  );
};

DrawerListItem.propTypes = {
  listItem: PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   iconName: PropTypes.string.isRequired,

    title: PropTypes.string,
    iconName: PropTypes.string,
  }),
  //   listItem: PropTypes.object
};

// DrawerListItem.defaultProps = {

// }

export default DrawerListItem;

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
