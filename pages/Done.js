import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Button, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FAB, Card, Title, Paragraph } from 'react-native-paper';
import { getTasksDone, clearTasks, markTaskAsDone } from '../services/tasks.service';

export default class Done extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.refreshData()
  }

  static onEnter() {
    Actions.refs.done.refreshData()
  }

  refreshData() {
    console.log("Done", "refresh data")
    this.setState({ tasks: Array.from(getTasksDone()) })

  }

  render() {

    return (
      <View style={styles.container}>
        
        
        <FlatList
          data={this.state.tasks}
          renderItem={({ item }) =>
            <Card>
              <Card.Content>
                <Title>{item.name}</Title>
              </Card.Content>
            </Card>
          }
          keyExtractor={(item, index) => index.toString()}
        />

        
      </View>

    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

})
