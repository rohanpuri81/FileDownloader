import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {rw, rh} from '../components/commonFunctions ';

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter / Paste link here"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          paddingVertical: rh(18),
          alignSelf: 'center',
          backgroundColor: 'purple',
          borderRadius: 10,
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>Download now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    gap: rh(14),
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 6,
    paddingLeft: 12,
  },
});
