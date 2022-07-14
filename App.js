import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View> 
        <Text style={styles.dummyText}>Another piece of text !</Text>
      </View>
      <Text style={styles.dummyText}>Hello World !</Text>
      <Button title="click me !"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dummyText : {
    borderWidth: 1,
    borderColor: "blue",
    margin: 5,
    padding: 5,
  }
});
