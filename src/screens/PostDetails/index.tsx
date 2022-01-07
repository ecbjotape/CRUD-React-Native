import React, { useEffect, useState } from 'react';


import { Button, Center, Heading, Text, View } from 'native-base';

import post from '../../constants/post';

import Styles from './styles';

const PostDetails: React.FC = (props: any) => {

  return (
    <View style={Styles.mainView}>
      <Center m="30">
        <Heading textAlign="center" m="30" fontSize="5xl">
          {post.title}
        </Heading>
        <View>
          <Text fontSize="3xl">
            {post.body}
          </Text>
        </View>
        <Button colorScheme="error" onPress={() => {}} >Excluir</Button>
      </Center>
    </View >
  );
};

export default PostDetails;
