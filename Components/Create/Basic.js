import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Avatar, Input, Button,  } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setLocation} from '../../redux/reducers/mainReducer';
import {cameraPerm, camToggle} from '../../redux/reducers/permissionReducer';
import {validate} from './../functions/validation';
import Cam from './Cam';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-community/async-storage';
import {setAll} from '../../redux/reducers/mainReducer';
import {addAll} from '../../redux/reducers/groupReducer';

const Basic = ({navigation}) => {

 const dispatch = useDispatch()
 const state = useSelector(state => state.userInfo)
 const required = useSelector(state => state.toggleValidation)
 const permissions = useSelector(state => state.permissions)
 const [loading, setLoading] = useState(false);
 const [accessLoc, setAccessLoc] = useState(false);

 useEffect(() => {
  (async () => {
    const { status } = await Camera.requestPermissionsAsync();
    dispatch(cameraPerm(status === 'granted'));
   })();
  getLocation();
}, []);


const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
     let val = JSON.parse(value);
     dispatch(addAll(val.group));
     dispatch(setAll(val.user))
     navigation.navigate('Profile')
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getUser()
}, [])

const getLocation = async () => {
  setLoading(true)
  try {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setAccessLoc(false);
      return;
    }
    setAccessLoc(true);
    let location = await Location.getCurrentPositionAsync({});
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    let address = await Location.reverseGeocodeAsync({longitude: longitude, latitude: latitude});
    if(address) {
      dispatch(setLocation(address[0].city))
      setLoading(false);
    }
  } catch (error) {
    setAccessLoc(false);
  }
}

  return (
    permissions.toggle ? <Cam/> :
    <View style={styles.View}>
    <TouchableOpacity style={styles.pictureContainer} onPress={() => dispatch(camToggle(!permissions.cameraStatus))}>
      <Avatar
      rounded
      size="large"
      icon={{name: 'plus', type: 'font-awesome'}}
      source={{
        uri: state.picture ? state.picture : null,
      }}/>
    </TouchableOpacity>
    <Input
      value={state.firstName}
      onChangeText={e => dispatch(setFirstName(e))}
      placeholder='First name'
    />
    <Input
      onChangeText={e => dispatch(setLastName(e))}
      value={state.lastName}
      placeholder='Last name'
    />
   {accessLoc && <Text>Location: {state.location == "" ? 'Getting the location...' : state.location}</Text>}
   {!accessLoc && <Input
      onChangeText={e => dispatch(setLocation(e))}
      value={state.location}
      placeholder='Location'
    />}
  
    {required && <Text style={styles.error}>All fields are required</Text>}
    <Button
      buttonStyle={{marginTop: 10}}
      title="Next"
      loading={accessLoc ? loading ? true : false : false}
      onPress={() => validate([state.firstName, state.lastName, state.picture, state.location], navigation, 'Final step')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    left: '5%',
    paddingBottom: 100,
  },
  error: {
    marginBottom: 10,
    color: 'red'
  },
  pictureContainer: {
    backgroundColor: '#ccc',
    borderRadius: 50
  }
})

export default Basic;
