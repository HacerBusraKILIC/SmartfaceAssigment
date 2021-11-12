import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// Components
import {Button} from '../../components';
import {users} from '../../helpers/mockData/users';
// Theme
import Fonts from '../../theme/Fonts';
import {Colors, Dimension} from '../../theme/Variables';
// Login
const Login = ({navigation}) => {
  // State
  const [form, setForm] = useState<object>({username: null, password: null});
  // Form Values
  const formValues = [
    {key: 'username', placeholder: 'Username'},
    {key: 'password', placeholder: 'Password'},
  ];

  const onChangeText = ({key = '', value = ''}: {key: string; value: string}) =>
    setForm({...form, [key]: value});

  const onLogin = () => {
    let filtered = users.filter(
      user =>
        user.username === form.username && user.password === form.password,
    )[0];
    if (filtered !== undefined) {
      filtered.role === 'student'
        ? navigation.navigate('student')
        : navigation.navigate('teacher');
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {formValues.map(
              ({key, placeholder}: {key: string; placeholder: string}) => (
                <TextInput
                  key={key}
                  style={styles.input}
                  value={form[key]}
                  placeholder={placeholder}
                  onChangeText={text => onChangeText({key, value: text})}
                />
              ),
            )}
            <Button
              title="LOGIN"
              onPress={onLogin}
              containerStyle={{marginTop: 30}}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

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
  input: {
    ...Fonts.textRegular,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    padding: 10,
    width: '100%',
  },
});
