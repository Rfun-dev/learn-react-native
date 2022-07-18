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
import GoalItem from "./component/GoalItem";

export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [visible,setVisible] = useState(false);

  const addGoalHandler = (textValue) => {
    setListGoals((prev) => [
      ...prev,
      {
        key: +new Date(),
        text: textValue,
      },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setListGoals((prev) => prev.filter((item) => item.key != id ));
  };

  const onVisibleHandler = () => {
    setVisible(true);
  }

  const onCancelHandler = (value) => {
    setVisible(value)
    console.log(value);
  }

  return (
    <View style={styles.container}>
      <Button onPress={onVisibleHandler} title="Show Input"/>
      <Goalinput onAddGoal={addGoalHandler} isVisible={visible} onCancel={onCancelHandler}/>
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
