import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({presse}) => presse && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
    padding: 8,
  },

  pressedItem : {
    opacity : '0.8',
  }
});

export default GoalItem;
