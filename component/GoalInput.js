import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
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
        <Image style={styles.image} source={require('../assets/image/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Input your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.actionContainer}>
          <View style={styles.button}>
            <Button title="Add Modal" onPress={addGoalHandler} color="#5e0acc"/>      
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelHandler} color="#f31282"/>
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
    marginBottom : 24,
    padding: 16,
    borderBottomWidth : 1,
    backgroundColor :"#311b6b",
    borderBottomColor: "#cccccc",
  },

  image : {
    width : 100,
    height : 100,
    margin : 20,
  },

  textInput: {
    borderWidth : 1,
    borderColor : "#e4d0ff",
    backgroundColor : "#e4d0ff",
    color : "#120438",
    borderRadius : 6,
    width : "100%",
    padding : 16,
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
