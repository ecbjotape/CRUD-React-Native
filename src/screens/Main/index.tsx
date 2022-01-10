import React, { useEffect, useState } from 'react';


import { Button, Image, KeyboardAvoidingView, Modal, ScrollView, Text, useToast, View } from 'native-base';
import { Keyboard, Platform, TextInput } from 'react-native';

import Styles from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';


import { StoreState } from '../../interfaces/redux/StoreState';

import { connect } from 'react-redux';

import taskAction from '../../redux/actions/taskAction';

import Task from './Task';

const mapStateToProps = (State: StoreState) => ({
  tasks: State.tasks.Task,
});

const MainScreen: React.FC = (props: any) => {
  const { taskAction, tasks } = props;

  const [taskItems, setTaskItems] = useState<string[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [taskUpdated, setTaskUpdated] = useState<string>('');
  const [indexTask, setIndexTask] = useState<number>(0);
  const [isUpdateTask, setIsUpdateTask] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setTaskItems(tasks);
  }, []);

  const handleAddTask = () => {
    if (taskText !== '') {
      Keyboard.dismiss();
      const allTasks = [...taskItems, taskText]
      setTaskItems(allTasks);
      taskAction(allTasks);
      setTaskText('');
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
    setTaskItems(itemsCopy);
    taskAction(itemsCopy);
  }

  const updateTask = (index: number) => {
    Keyboard.dismiss();
    let itemsCopy = [...taskItems];
    itemsCopy[index] = taskUpdated;
    setTaskItems(itemsCopy);
    taskAction(itemsCopy);
    setIsUpdateTask(false);
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
            <TextInput style={Styles.input} placeholder={'Atualize a tarefa'} onChangeText={textUpdated => setTaskUpdated(textUpdated)} />
            <View style={Styles.addWrapper}>
              <Button variant="link" onPress={() => updateTask(indexTask)}>
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
        <TextInput style={Styles.input} placeholder={'Adicione uma tarefa...'} value={taskText} onChangeText={text => { setTaskText(text) }} />
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

export default connect(mapStateToProps, { taskAction })(MainScreen);