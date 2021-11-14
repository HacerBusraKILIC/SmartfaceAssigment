import React, {useEffect, useState} from 'react';
// Modules
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  Modal,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {users} from '../../../helpers/mockData/users';
// Theme
import Fonts from '../../../theme/Fonts';
import Layout from '../../../theme/Layout';
import {Colors} from '../../../theme/Variables';
// Component
// interface
interface ITeacherItem {
  item: object;
  index: number;
}
// TeacherItem
const TeacherItem = ({item, index}: ITeacherItem) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [students, setStudents] = useState<Array<object>>([]);

  useEffect(() => {
    let studentList = users.filter(user => user.role === 'student');
    setStudents(studentList);
  }, []);

  return (
    <>
      <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
        <Image
          style={styles.image}
          source={{uri: `https://picsum.photos/200/300?random=${index}`}}
        />
        <Text style={[Fonts.textRegular, styles.name]}>{item.namesurname}</Text>
      </Pressable>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}>
                <Icon name="close" size={20} color={Colors.gray} />
              </Pressable>
              <ScrollView showsVerticalScrollIndicator={false}>
                {students.map((student, index) => (
                  <View key={student.namesurname} style={styles.container}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: `https://picsum.photos/200/300?random=${index}`,
                      }}
                    />
                    <Text style={[Fonts.textRegular, styles.name]}>
                      {student.namesurname}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default TeacherItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  image: {width: 50, height: 50, borderRadius: 25},
  name: {paddingLeft: 15},
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backdrop,
  },
  modalView: {
    maxHeight: '70%',
    width: '80%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    ...Layout.shadow,
  },
  closeButton: {padding: 5, alignItems: 'flex-end'},
});
