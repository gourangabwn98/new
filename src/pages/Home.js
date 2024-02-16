import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import {create} from 'react-test-renderer';
import user from '../../assets/user.jpg';

const Home = ({navigation}) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const openCard = () => {
    setIsCardOpen(true);
  };

  const closeCard = () => {
    setIsCardOpen(false);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#d9dedb'}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginLeft: 15,
          color: 'black',
          marginBottom: 10,
          marginTop: 10,
        }}>
        Upcomming
      </Text>
      <View
        style={{
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',

          marginRight: 8,

          marginTop: 0,
          padding: 7,
          height: 90,
        }}>
        {/* div1 */}
        <View style={styles.container1}>
          <Text style={{fontSize: 20}}>Fri</Text>
          <Text
            style={{
              backgroundColor: '#282cb5',
              borderRadius: 17,
              padding: 6,
              color: 'white',
              fontSize: 20,
              paddingLeft: 13,
              paddingRight: 13,
            }}>
            3
          </Text>
        </View>

        {/* div2 */}
        <View style={styles.container2}>
          <View>
            <Text style={{fontSize: 19, color: 'black', marginBottom: 5}}>
              Meething For Business
            </Text>
            <Text style={{fontSize: 15}}>7.30 - 8.30 P.M</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={user} style={{width: 40, height: 40}} />
            <Text style={{color: '#7a7ef5', fontSize: 22}}>3</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',

          marginRight: 8,

          marginTop: 0,
          padding: 7,
          height: 90,
        }}>
        {/* div1 */}
        <View style={styles.container1}>
          <Text style={{fontSize: 20}}>Sat</Text>
          <Text
            style={{
              // backgroundColor: '#282cb5',
              borderRadius: 17,
              padding: 6,
              color: 'black',
              fontSize: 20,
              paddingLeft: 13,
              paddingRight: 13,
            }}>
            4
          </Text>
        </View>

        {/* div2 */}
        <View style={styles.container2}>
          <View>
            <Text style={{fontSize: 19, color: 'black', marginBottom: 5}}>
              Family Night Plan
            </Text>
            <Text style={{fontSize: 15}}>9.00 - 11.30 P.M</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={user} style={{width: 40, height: 40}} />
            <Text style={{color: '#7a7ef5', fontSize: 22}}>4</Text>
          </View>
        </View>
      </View>

      {isCardOpen && (
        <TouchableOpacity style={styles.overlay} onPress={closeCard}>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 5,
              }}>
              <Text style={{fontSize: 20, marginRight: 10, color: 'black'}}>
                Filter
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Text style={{color: 'blue', fontSize: 20, marginRight: 10}}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
            {/* line */}
            <View
              style={{
                borderWidth: 0.7,
                borderColor: 'black',
                marginTop: 10,
              }}></View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 5,
              }}>
              <View>
                <Text style={{fontSize: 18, marginRight: 10, color: 'black'}}>
                  Start Date
                </Text>
                <Text
                  style={{
                    backgroundColor: '#d9dedb',
                    marginTop: 9,
                    borderRadius: 15,
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  Sat ,25 Dec 2023
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 18, marginRight: 10, color: 'black'}}>
                  End Date
                </Text>
                <Text
                  style={{
                    backgroundColor: '#d9dedb',
                    marginTop: 9,
                    borderRadius: 15,
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  Sat ,25 Dec 2023
                </Text>
              </View>
            </View>
            {/* Add additional content */}
          </View>
        </TouchableOpacity>
      )}

      {/* footer button */}
      <View
        style={{
          alignItems: 'flex-end',
          marginTop: 390,

          marginRight: 15,
        }}>
        <TouchableOpacity onPress={openCard} style={styles.footer}>
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#d9dedb',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'white',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
  },
  footer: {
    height: 70,
    width: 70,
    fontSize: 50,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 40,
    // padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#d9dedb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    height: 170,
    width: '85%',

    // zIndex: 1,
  },
});

export default Home;
