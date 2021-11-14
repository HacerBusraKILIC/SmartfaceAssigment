/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// Modules
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextStyle,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Theme
import Fonts from '../theme/Fonts';
import {Colors, Dimension} from '../theme/Variables';
import {useNavigation} from '@react-navigation/native';
// Interface
interface HeaderProps {
  variant?: 'primary' | 'default';
  label?: string;
  labelStyle?: TextStyle;
  handleLeftIcon?: () => void;
  drawerButton?: boolean;
  barStyle?: 'light-content' | 'dark-content';
}
const Header = ({
  variant,
  label,
  labelStyle,
  handleLeftIcon,
  drawerButton,
  barStyle,
}: HeaderProps) => {
  const navigation = useNavigation();
  const backgroundColor =
    variant === 'primary' ? Colors.primary_dark : Colors.border;
  const textColor = variant === 'primary' ? Colors.white : Colors.gray;

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      <View style={[styles.headerStyle, {backgroundColor}]}>
        {drawerButton && (
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu-outline" size={25} color={Colors.white} />
          </Pressable>
        )}
        {handleLeftIcon && (
          <Pressable onPress={handleLeftIcon}>
            <Icon name="chevron-back-outline" size={25} color={Colors.white} />
          </Pressable>
        )}
        <Text
          style={[styles.headerTitleStyle, labelStyle, {color: textColor}]}
          numberOfLines={1}>
          {label}
        </Text>
        {(handleLeftIcon || drawerButton) && <View style={{width: 25}} />}
      </View>
    </>
  );
};

Header.defaultProps = {variant: 'default', barStyle: 'default'};
export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    width: Dimension.width,
    alignItems: 'center',
  },
  headerTitleStyle: {
    ...Fonts.titleRegular,
    flex: 0.7,
    fontSize: 18,
    textAlign: 'center',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: 100,
    height: 27,
    resizeMode: 'contain',
  },
});
