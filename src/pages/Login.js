import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

// import {Button} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon

import LoginImage from '../../assets/login.png';

const Login = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={LoginImage}
          style={{width: 370, height: 370, marginTop: 15, marginBottom: 30}}
        />

        <View style={styles.inputContainer}>
          {/* <Icon name="font-awesome" size={20} color="gray" style={styles.icon} /> */}
          {/* Icon */}
          <TextInput placeholder="Mobile No." style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          {/* <Icon name="lock" size={20} color="gray" style={styles.icon} />{' '} */}
          {/* Icon */}
          <TextInput
            placeholder="Enter OTP"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: '#e6ecf0',
    // Adjust left padding to accommodate icon
    flex: 1,
  },
  icon: {
    position: 'absolute',
    // left: 10,
    // top: 12, // Adjust top position to vertically center the icon
  },
  btn: {
    width: '90%',
    height: 70,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
Login.js;
