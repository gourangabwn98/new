import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import clock from '../../assets/clock.png';
import people from '../../assets/people.png';

const Create = ({navigation}) => {
  return (
    <ScrollView style={{padding: 10, marginLeft: 10, marginRight: 10}}>
      <TouchableOpacity
        style={{
          marginLeft: 300,
          marginTop: 10,
          backgroundColor: 'blue',
          width: 70,
          height: 30,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('History')}>
        <Text style={{color: 'white'}}>Create</Text>
      </TouchableOpacity>
      <TextInput placeholder="Add Title" />
      <View style={{borderWidth: 0.7, borderColor: 'black'}}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 9}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={clock}
                style={{
                  width: 29,
                  height: 29,
                  borderRadius: 20,
                  justifyContent: 'center',
                }}
              />
            </View>
            <Text style={{fontSize: 17}}>All Day</Text>
          </View>

          <Text
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 15,
              padding: 5,
              marginTop: 10,
            }}>
            {' '}
            Sat ,25 Dec 2023
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 25,
            }}>
            o
          </Text>
          <Text
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 15,
              padding: 5,
              marginTop: 10,
            }}>
            12:30 pm
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View>
          <Text
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 15,
              padding: 5,
              marginTop: 10,
            }}>
            {' '}
            Sat ,25 Dec 2023
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              borderWidth: 0.4,
              borderColor: 'black',
              borderRadius: 15,
              padding: 5,
              marginTop: 10,
            }}>
            12:30 pm
          </Text>
        </View>
      </View>

      <View
        style={{borderWidth: 0.7, borderColor: 'black', marginTop: 20}}></View>
      <Text style={{marginTop: 20, fontSize: 20}}>Add Notes</Text>

      <TextInput style={styles.input} />
      <View style={{flexDirection: 'row', gap: 9, marginTop: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={people}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'center',
            }}
          />
        </View>
        <Text style={{fontSize: 17}}>All Day</Text>
      </View>
      <TextInput style={styles.input2} placeholder="Search People" />
      <View
        style={{borderWidth: 0.7, borderColor: 'black', marginTop: 20}}></View>
    </ScrollView>
  );
};

export default Create;
const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    height: 90,
  },
  input2: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    height: 40,
  },
});
