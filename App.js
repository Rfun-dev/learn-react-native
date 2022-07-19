import { StyleSheet, View, Button, FlatList } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Goalinput from "./component/GoalInput";
import GoalItem from "./component/GoalItem";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  const addGoalHandler = (textValue) => {
    setListGoals((prev) => [
      ...prev,
      {
        key: +new Date(),
        text: textValue,
      },
    ]);
    setVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setListGoals((prev) => prev.filter((item) => item.key != id));
  };

  const onVisibleHandler = () => {
    setVisible(true);
  };

  const endAddGoalHandler = (value) => {
    setVisible(value);
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Button onPress={onVisibleHandler} title="Show Input" color="#a065ec" />
        <Goalinput
          onAddGoal={addGoalHandler}
          isVisible={visible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.containerGoals}>
          <FlatList
            data={listGoals}
            renderItem={(goal) => (
              <GoalItem
                id={goal.item.key}
                text={goal.item.text}
                onDeleteGoal={deleteGoalHandler}
              />
            )}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  containerGoals: {
    flex: 5,
  },
});
