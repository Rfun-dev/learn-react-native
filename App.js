import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput style={styles.textInput} placeholder='Input your goals'/>
        <Button title='Save'></Button>
      </View>
      <View style={styles.containerGoals}>
        <Text>List Your goals ...</Text>
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
