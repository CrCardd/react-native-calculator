import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, GestureResponderEvent, ViewStyle, TextStyle, StyleProp } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  size?: "default" | "double";
  theme?: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({ onPress, text, size = "default", theme = "primary"}) => {
  const buttonStyles: StyleProp<ViewStyle>[] = [styles.button];  // Tipando como StyleProp<ViewStyle>
  const textStyles: StyleProp<TextStyle>[] = [styles.text];      // Tipando como StyleProp<TextStyle>

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "tertiary") {
    buttonStyles.push(styles.buttonTertiary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    width: buttonWidth,
    height: buttonWidth-10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonTertiary: {
    backgroundColor: "#f09a36",
  },
});

export default Button;
