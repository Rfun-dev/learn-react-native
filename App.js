import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import Goalinput from "./component/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listGoals, setListGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setListGoals((prev) => [
      ...prev, 
      {
        key : +new Date(),
        text : enteredGoalText,
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Input your goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Save" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.containerGoals}>
        <FlatList
          data={listGoals}
          renderItem={(goal) => <Goalinput text={goal.item.text}/>}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  containerInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    width: "70%",
    marginRight: 8,
    borderWidth: 1,
    padding: 8,
    borderColor: "#cccccc",
  },

  containerGoals: {
    flex: 5,
  },
});
