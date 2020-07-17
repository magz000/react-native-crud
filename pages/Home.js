import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Button, ToastAndroid, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FAB, Card, Title, Checkbox } from 'react-native-paper';
import { getTasks, clearTasks, markTaskAsDone } from '../services/tasks.service';

export default class Home extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.refreshData()
  }

  static onEnter() {
    Actions.refs.home.refreshData()
  }

  refreshData() {
    console.log('refreshData')
    this.setState({ tasks: Array.from(getTasks()) })

  }

  goToAdd = () => {
    Actions.add()
  }

  updateTask = (name) => {
    Alert.alert(
      "Mark Task as done",
      "Are you sure you want to mark the task as done?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            markTaskAsDone(name)
            this.refreshData()
            ToastAndroid.showWithGravityAndOffset(
              "Task maked as done",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }
        }
      ],
    );

  }

  clearList = () => {
    Alert.alert(
      "Clear list",
      "Are you sure you want to clear the list",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            clearTasks()
            this.refreshData()
        
            ToastAndroid.showWithGravityAndOffset(
              "Task List cleared",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }
        }
      ],
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnHolder}>
          <Button title="Clear" style={styles.btnClear} onPress={() => this.clearList()} />
        </View>

        <FlatList
          data={this.state.tasks}
          renderItem={({ item }) =>
            <Card style={styles.card}>
              <Card.Content>
                <View style={{ flexDirection: "row"}}>
                  <Checkbox
                    style={styles.checkbox}
                    onPress={() => this.updateTask(item.name)}
                  />
                  <Title>{item.name}</Title>
                </View>
              </Card.Content>
            </Card>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={this.goToAdd}
          color="white"
        />
      </View>

    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  card: {

  },

  checkbox: {
    alignSelf: "flex-end"
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  btnHolder: {
    paddingHorizontal: 12,
    paddingBottom: 12
  }

})
