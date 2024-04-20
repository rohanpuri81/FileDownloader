import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import React, {useEffect, useState} from 'react';
import {rw, rh} from '../components/commonFunctions ';

const Home = () => {
  const [pastedURL, setPastedURL] = useState('');

  const requestFilesPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App storage Permission',
          message:
            'FileDownloader App needs access to your Storage ' +
            'so you can download .',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadFile();
      } else {
        console.log('storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const downloadFile = () => {
    const {config, fs} = RNFetchBlob;
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter / Paste link here"
          style={styles.textInput}
          value={pastedURL}
          onChangeText={txt => setPastedURL(txt)}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '90%',
          paddingVertical: rh(16),
          alignSelf: 'center',
          backgroundColor: 'purple',
          borderRadius: 10,
        }}
        onPress={() => requestFilesPermission()}>
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
