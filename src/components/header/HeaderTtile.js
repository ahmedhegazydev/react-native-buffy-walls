import React from 'react';
import styled from 'styled-components/native';
import {Avatar} from 'react-native-image-avatars';
import {View, Dimensions} from 'react-native';

// import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/Ionicons';
import IconForward from 'react-native-vector-icons/AntDesign';

// const HeaderTitle = props => {
//   return <OtherScreenContent>{/* <Square /> */}</OtherScreenContent>;
// };

const HeaderTitle = props => {
  return (
    <HeaderTitleView>
      <Avatar
        imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        size="small"
        borderColor="#f2f2f2"
        shadow
      />
      <IconForward name="rightcircleo" size={20} color="#000000" />
    </HeaderTitleView>
  );
};

export default HeaderTitle;

const HeaderTitleView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  // justify-content: center;
  // justify-content: space-around;
  // justify-content: space-between;
  justify-content: space-evenly;

  margin-start: 40px;
  margin-end: 40px;
`;

const Square = styled.View`
  height: 100px;
  aspect-ratio: 1;
  background-color: orange;
`;
