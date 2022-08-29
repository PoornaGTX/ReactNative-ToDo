import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  //model

  const startAddGoalHandler = () => {
    setModelIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModelIsVisible(false);
  };

  const addGoalHandler = (enteredTextGoalText) => {
    setCourseGoals([
      ...courseGoals,
      { text: enteredTextGoalText, id: Math.random().toString() },
      //enteredTextGoalText put like object beacause we have to genrate key for FlatList
    ]);
    endAddGoalHandler();
  };

  //delete items

  const deleteGoalHander = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modelIsVisible}
          onCancle={endAddGoalHandler}
        />

        <View style={styles.goals}>
          <FlatList
            data={courseGoals} //data is a prop that require from the  FlatList
            renderItem={(itemData) => {
              //renderItem return the data elements
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHander}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
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
