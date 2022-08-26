import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredTextGoalText, setEnteredTextGoalText] = useState("");

  const goalInpuntHandler = (enteredText) => {
    //in the onChangeText the return a prop with user input text to get that prop we use enteredText
    // console.log(enteredText);
    setEnteredTextGoalText(enteredText);
  };

  const addGoalHanderfromInput = () => {
    props.onAddGoal(enteredTextGoalText); //pass the enteredTextGoalText value to app.js  addGoalHandler
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInpuntHandler}
      />
      <Button title="Add goal" onPress={addGoalHanderfromInput} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
