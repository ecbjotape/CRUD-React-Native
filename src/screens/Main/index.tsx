import React, { useEffect, useState } from 'react';


import { Box, Button, ScrollView, Spinner, Text, View } from 'native-base';

import Styles from './styles';

import ListPostService from '../../services/ListPostService';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { mainScreenNavigationProp } from '../../interfaces/ParamsList/postStack';
import { StoreState } from '../../interfaces/redux/StoreState';
import { Post } from '../../interfaces/redux/Post';

import { connect } from 'react-redux';

const mapStateToProps = (State: StoreState) => ({
  Post: State.Post,
})

const MainScreen: React.FC = (props: any) => {
  const { Post: { title, body, id } } = props;

  const navigation = useNavigation<mainScreenNavigationProp>();
  const [posts, setPosts] = useState([]);
  console.log(title, body, id);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res: any = await ListPostService.getList();

    setPosts(res);
  }

  const viewPost = async (post: Post) => {
    navigation.navigate('PostDetails', { post });
  }

  const createPost = async () => {
    navigation.navigate('PostCreate');
  }

  const renderListPosts = () => (
    <ScrollView>
      {
        posts.map(
          (el: any) => (
            <View key={el.id}>
              <TouchableOpacity onPress={() => { viewPost(el) }}>
                <Box
                  borderTopWidth="1"
                  borderColor="coolGray.300"
                  style={Styles.boxCallList}
                  p="2"
                >
                  <View>
                    <Text style={Styles.titlePost}>
                      {el.title}
                    </Text>
                    <Text style={Styles.textPost}>
                      {el.body}
                    </Text>
                  </View>
                </Box>
              </TouchableOpacity>
            </View>
          ),
        )}
    </ScrollView>
  );

  return (
    <View style={Styles.mainView}>
      <View style={Styles.containerHeader}>
        <Text color="white" fontSize={20}>fumi.co</Text>
        <Button onPress={() => { createPost() }} variant="link">
          Novo post
        </Button>
      </View>
      <View style={Styles.contentMain}>
        {renderListPosts()}
      </View>
    </View>
  );
};
export default connect(mapStateToProps, null)(MainScreen);