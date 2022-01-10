import React, { useState } from 'react';


import { Button, Image, KeyboardAvoidingView, Modal, ScrollView, Text, useToast, View } from 'native-base';
import { Keyboard, Platform, TextInput } from 'react-native';

import Styles from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';


import { StoreState } from '../../interfaces/redux/StoreState';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import taskAction from '../../redux/actions/taskAction';

import Task from './Task';

const mapStateToProps = (State: StoreState) => ({
  Task: State.tasks,
  State
});

const MainScreen: React.FC = (props: any) => {
  const { taskAction, State } = props;
  const [taskItems, setTaskItems] = useState<any>([]);
  const [task, setTask] = useState<string>('');
  const [taskUpdated, setTaskUpdated] = useState<string>('');
  const [indexTask, setIndexTask] = useState<number>(0);
  const [isUpdateTask, setIsUpdateTask] = useState(false);
  const toast = useToast();

  const handleAddTask = () => {
    if (task !== '') {
      Keyboard.dismiss();
      const allTasks = [...taskItems, task]
      setTaskItems(allTasks);
      taskAction(allTasks);
      setTask('');
      toast.show({
        title: "Tarefa adicionada",
        description: "Sua tarefa foi adicionada com sucesso!",
      });
    } else {
      toast.show({
        title: "Tarefa obrigatória",
        description: "Por favor, adicione uma tarefa!",
      });
    }
  }

  const deleteTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const updateTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index] = taskUpdated;
    setTaskItems(itemsCopy);
    onCloseModal();
  }

  const onCloseModal = () => {
    setIsUpdateTask(false);
  };

  const OpenModal = (index: number) => {
    setIsUpdateTask(true);
    setIndexTask(index);
  };

  const modalUpdateTask = () => (
    <Modal
      isOpen={isUpdateTask}
      animationPreset="slide"
      onClose={() => onCloseModal()}
    >
      <Modal.Content
        minWidth="90%"
      >
        <Modal.Body >
          <View
            style={Styles.writeTaskWrapper}
          >
            <TextInput style={Styles.input} placeholder={'Atualize a tarefa'} value="" onChangeText={textUpdated => setTaskUpdated(textUpdated)} />
            <View style={Styles.addWrapper}>
              <Button variant="link" onPress={() => { updateTask(indexTask) }}>
                <Text color="#FFF">Atualizar</Text>
              </Button>
            </View>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal >
  );

  const renderListTasks = () => (
    <View style={Styles.renderListTasks}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        <View style={Styles.tasksWrapper}>
          <Text style={Styles.sectionTitle}>Lista de tarefas</Text>
          <View style={Styles.items}>
            {
              taskItems.length > 0 ?
                taskItems.map((item: string, index: number) => {
                  return (
                    <View key={index} style={Styles.contentTask} flexDirection="row" justifyContent="space-between">
                      <Task text={item} />
                      <View style={Styles.buttonTask}>
                        <Button bg="blue.400" onPress={() => { OpenModal(index) }}>
                          <Text color="#FFF">Atualizar</Text>
                        </Button>
                        <Button bg="red.400" onPress={() => { deleteTask(index) }}>
                          <Text color="#FFF">Excluir</Text>
                        </Button>
                      </View>
                    </View>
                  )
                }) :
                <View style={Styles.centerContent}>
                  <Image style={Styles.logoModal} alt="Lista vazia" source={require('../../assets/images/listEmpty.png')} />
                  <Text style={Styles.warningTasks}>Sua lista de tarefas está vazia. Adicione uma tarefa...</Text>
                </View>
            }

          </View>
        </View>

      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.writeTaskWrapper}
      >
        <TextInput style={Styles.input} placeholder={'Adicione uma tarefa'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={Styles.addWrapper}>
            <Text color="#FFF">Criar</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );

  return (
    <View style={Styles.mainView}>
      <View style={Styles.containerHeader}>
        <Text color="white" fontSize={25}>fumi.co</Text>
      </View>
      {renderListTasks()}
      {modalUpdateTask()}
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ taskAction }, dispatch);
};

export default connect(mapStateToProps, { taskAction })(MainScreen);