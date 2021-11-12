import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Fonts from '../theme/Fonts';
import {Colors} from '../theme/Variables';
// interface
interface IButton {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}
const Button = ({title, onPress, containerStyle, textStyle}: IButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: Colors.primary_light,
    width: '50%',
  },
  text: {...Fonts.textMedium, color: Colors.white},
});
