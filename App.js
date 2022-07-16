import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('');
  const [listGoals,setListGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    setListGoals(prev => [...prev,enteredGoalText])
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput style={styles.textInput} placeholder='Input your goals' onChangeText={goalInputHandler}/>
        <Button title='Save' onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.containerGoals}>
        {
          listGoals.map(goal => <Text key={goal}>{goal}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      paddingTop : 50,
      paddingHorizontal : 16
    },

    containerInput : {
      flex : 1,
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : 'center',
      paddingBottom : 24,
      borderBottomWidth : 1,
      borderBottomColor: "#cccccc",  
    },

    textInput : {
      width : "70%",
      marginRight : 8,
      borderWidth : 1,
      padding : 8,
      borderColor : "#cccccc",
    },

    containerGoals : {
      flex : 5,
    }
});
