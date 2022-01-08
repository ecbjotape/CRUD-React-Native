/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text } from 'react-native';
import { Button, Input, Spinner, TextArea, useToast, View } from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';
import postAction from '../../redux/actions/getPosts';
import { useNavigation } from '@react-navigation/native';
import { postCreatenNavigationProp } from '../../interfaces/ParamsList/postStack';

const PostCreate: React.FC = (props: any) => {

  const { postAction } = props;
  const navigation = useNavigation<postCreatenNavigationProp>();
  const [showSpinner, setShowSpinner] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const toast = useToast();
  const id = 1
  const renderSpinner = () => <Spinner animating color="#181818" />;

  const onSubmit = async () => {
    try {
      setShowSpinner(true);

      postAction(
        title,
        body,
        id,
      )
      setShowSpinner(false);
      navigation.goBack();
    } catch (err: any) {
      setShowSpinner(false);

      toast.show({
        title: "Insira os campos obrigatórios",
        status: "error",
        description: "Por favor, verifique o acesso e tente novamente",
      });
    }

  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formView}>
        <View>
          <Text style={styles.formTitle}>Título</Text>
          <Input placeholder='Título do post' onChangeText={(text) => { setTitle(text) }} />
        </View>
        <View>
          <Text style={styles.formTitle}>Texto</Text>
          <TextArea onChangeText={(text) => { setBody(text) }} placeholder='Insira o texto' />
        </View>
        <View style={styles.buttonView}>
          <Button
            colorScheme='success'
            onPress={() => { onSubmit() }}
          >{showSpinner ? renderSpinner() : 'Salvar'}</Button>
        </View>
      </View>
    </View >
  );
};
export default connect(null, { postAction })(PostCreate);