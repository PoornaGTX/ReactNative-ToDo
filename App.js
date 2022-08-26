import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [enteredTextGoalText, setEnteredTextGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInpuntHandler = (enteredText) => {
    //in the onChangeText the return a prop with user input text to get that prop we use enteredText
    // console.log(enteredText);
    setEnteredTextGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals([
      ...courseGoals,
      { text: enteredTextGoalText, key: Math.random().toString() },
      //enteredTextGoalText put like object beacause we have to genrate key for FlatList
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInpuntHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goals}>
        <FlatList
          data={courseGoals} //data is a prop that require from the  FlatList
          renderItem={(itemData) => {
            //renderItem return the data elements
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goals: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
