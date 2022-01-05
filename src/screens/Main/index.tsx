import React, { useEffect, useState } from 'react';


import { Box, Button, ScrollView, Spinner, Text, View } from 'native-base';

import Styles from './styles';

import ListPostService from '../../services/ListPostService';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainScreen: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  
  const renderSpinner = () => <Spinner animating color="#f6f" />;

  useEffect(() => {
    getPosts();
    setShowSpinner(false);
  }, []);

  const getPosts = async () => {
    const res = await ListPostService.getList();

    setPosts(res);
  }

  const viewPost = async (id: string) => {
    console.log(id);
  }

  const renderListPosts = () => (
    <ScrollView>
      {
        posts.map(
          (el: any) => (
            <View key={el.id}>
              <TouchableOpacity onPress={() => { viewPost(el.id) }}>
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
        <Button variant="link">
          Adicionar
        </Button>
      </View>
      <View style={Styles.contentMain}>
      {showSpinner ? renderSpinner() : renderListPosts()}
      </View>
    </View>
  );
};

export default MainScreen;
