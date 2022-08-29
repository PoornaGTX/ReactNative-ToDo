import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          placeholderTextColor="white"
          onChangeText={goalInpuntHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHanderfromInput}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    width: "100%",
    padding: 8,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "30%",
    marginHorizontal: 8, //margin left and right
  },
  image: {
    width: 200,
    height: 150,
    margin: 20,
  },
});
