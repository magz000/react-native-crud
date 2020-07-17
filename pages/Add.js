import React from 'react'
import { Text, StyleSheet, View, ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { FAB, TextInput } from 'react-native-paper';
import { addTask } from '../services/tasks.service';


const Add = () => {
  // const goToHome = () => {
  //   Actions.home()
  // }

  const [text, setText] = React.useState('');

  const saveTask = () => {
    console.log(text)
    if(addTask(text)) {
      ToastAndroid.showWithGravityAndOffset(
        "Task Added",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }else {
      ToastAndroid.showWithGravityAndOffset(
        "Task Already Existing",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }

    

    Actions.pop()
  }

  

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          type="outlined"
          label="Name"
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      

      <FAB
        style={styles.fab}
        icon="floppy"
        onPress={ saveTask }
        color="white"
      />
    </View>
  )
}
export default Add


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    // height: 70,
    // width: 240,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
