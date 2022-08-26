import { StyleSheet, View, FlatList } from "react-native";

import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredTextGoalText) => {
    setCourseGoals([
      ...courseGoals,
      { text: enteredTextGoalText, key: Math.random().toString() },
      //enteredTextGoalText put like object beacause we have to genrate key for FlatList
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goals}>
        <FlatList
          data={courseGoals} //data is a prop that require from the  FlatList
          renderItem={(itemData) => {
            //renderItem return the data elements
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goals: {
    flex: 5,
  },
});
