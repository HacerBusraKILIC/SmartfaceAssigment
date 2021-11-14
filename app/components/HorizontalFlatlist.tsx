import React from 'react';
// Modules
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
// interface
interface IHorizontalFlatlist {
  data: Array<object>;
  ChildrenItem: ListRenderItem<object>;
}
// HorizontalFlatlist
const HorizontalFlatlist = ({data, ChildrenItem}: IHorizontalFlatlist) => {
  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={ChildrenItem}
      keyExtractor={item => item.id}
      numColumns={1}
    />
  );
};

export default HorizontalFlatlist;

const styles = StyleSheet.create({
  flatlist: {padding: 10},
});
