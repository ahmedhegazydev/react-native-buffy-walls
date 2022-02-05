import React from 'react';
import styled from 'styled-components/native';
import {Avatar} from 'react-native-image-avatars';
import {View, Dimensions} from 'react-native';

// const HeaderTitle = props => {
//   return <OtherScreenContent>{/* <Square /> */}</OtherScreenContent>;
// };

const HeaderTitle = props => {
  return (
    <View>
      <Avatar
        imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        size="small"
        borderColor="#f2f2f2"
        shadow
      />
    </View>
  );
};

export default HeaderTitle;

const OtherScreenContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Square = styled.View`
  height: 100px;
  aspect-ratio: 1;
  background-color: orange;
`;
