import { useEffect, useState } from "react";
import { Dimensions, Keyboard } from "react-native";

const [keyboardDimension, setKeyboardDimension] = useState(0);

const keyboardWillShow = () => {
  useEffect(() => {
  Keyboard.addListener("keyboardWillShow", (e) => {
  setKeyboardDimension(Dimensions.get("window").height * 0.9 - e.endCoordinates.height)
})
  })}

const keyboardWillHide = () => {
  useEffect(() => { Keyboard.addListener("keyboardWillHide", (e) => setKeyboardDimension(0)) })
}


export {
  keyboardDimension,
  keyboardWillHide,
  keyboardWillShow,


}