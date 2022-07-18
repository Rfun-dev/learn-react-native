import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.textInput}
        placeholder="Input your goals"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Save" onPress={addGoalHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
