import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Theme
import {Colors, Dimension} from '../../theme/Variables';
// Dashboard
const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text>AAA</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: Colors.white,
  },
  container: {
    minHeight: Dimension.height,
    backgroundColor: Colors.white,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
