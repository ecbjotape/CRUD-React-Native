import React from 'react';

import { Button, Image, StatusBar, Text, View } from 'native-base';

import Styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const MainScreen: React.FC = () => {
  return (
    <View style={Styles.mainView}>
      <StatusBar backgroundColor="#898989" />
      <View style={Styles.containerHeader}>
        <Text color="white" fontSize={20}>fumi.co</Text>
        <Button variant="link">
          Adicionar
        </Button>
      </View>
      <View style={Styles.contentMain}>
        <ScrollView>
          <Text>Parece que você ainda não adicionou</Text>
          <Button variant="link">Adicionar</Button>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;
