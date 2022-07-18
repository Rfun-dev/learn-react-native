import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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

  const onCancelHandler = () => {
    props.onCancel(false)
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Input your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.actionContainer}>
          <View style={styles.button}>
            <Button title="Add Modal" onPress={addGoalHandler}/>      
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    justifyContent : "center",
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

  actionContainer : {
    flexDirection : "row",
    marginTop : 16,
  },

  button : {
    marginHorizontal : 8,
  }

});

export default GoalInput;
