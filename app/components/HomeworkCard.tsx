import React, {useEffect} from 'react';
// Modules
import {Pressable, StyleSheet, Text, View} from 'react-native';
// Theme
import Fonts from '../theme/Fonts';
import Layout from '../theme/Layout';
import {Colors, Dimension, MetricsSizes} from '../theme/Variables';
// interface
interface IHomeworkCard {
  typeColor: string;
  status: string;
  item: object;
  onPress: () => void;
}
// Constants
const CARD_PADDING = 15;
// HomeworkCard
const HomeworkCard = ({typeColor, status, item, onPress}: IHomeworkCard) => {
  const colored = {backgroundColor: typeColor, opacity: 0.8};

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={[styles.colored, colored]} />
      <Text style={[styles.subject, colored, {width: 90}]}>{item.subject}</Text>
      <View style={styles.cardInner}>
        <Text style={[Fonts.textRegular, {paddingBottom: 5}]}>{item.name}</Text>
        <Text numberOfLines={3} style={styles.detail}>
          {item.detail}
        </Text>
      </View>
    </Pressable>
  );
};

export default HomeworkCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.border,
    marginRight: CARD_PADDING,
    borderRadius: 10,
    width: Dimension.width - MetricsSizes.screenPadding * 2 - CARD_PADDING * 2,
    ...Layout.shadow,
  },
  cardInner: {padding: CARD_PADDING},
  colored: {
    width: '100%',
    height: 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detail: {
    overflow: 'hidden',
  },
  subject: {
    ...Fonts.textRegular,
    fontSize: 12,
    marginLeft: CARD_PADDING,
    textAlign: 'center',
    color: Colors.white,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
