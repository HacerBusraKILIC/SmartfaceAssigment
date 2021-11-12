/**
 * This file contains all application's style relative to fonts
 */
import {StyleSheet} from 'react-native';
import {FontSize, Colors} from './Variables';

export default StyleSheet.create({
  textBold: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.text,
  },
  textItalic: {
    fontFamily: 'Poppins-Italic',
    color: Colors.text,
  },
  textSmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.small,
    color: Colors.text,
  },
  textMedium: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  textSmallLight: {
    fontFamily: 'Poppins-Light',
    fontSize: FontSize.small,
    color: Colors.text,
  },
  textRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  textLarge: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleSmall: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.small * 2,
    color: Colors.text,
  },
  titleRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  titleExtraLight: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  titleLarge: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.large,
    color: Colors.text,
  },
});
