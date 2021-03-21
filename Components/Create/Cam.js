import React, {useRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import {setPicture} from '../../redux/reducers/mainReducer';
import {camToggle} from '../../redux/reducers/permissionReducer';

import { Camera } from 'expo-camera';


const Cam = () => {

 const dispatch = useDispatch()
 const cameraRef = useRef(null)

 const takePicture = async () => {
  let photo = await cameraRef.current.takePictureAsync();
  console.log(photo);
  if(photo) {
  dispatch(setPicture(photo.uri))
  dispatch(camToggle(false))
  }
 }

  return (
    <View style={styles.container}>
    <Camera style={styles.camera} type={Camera.Constants.Type.front} ref = {cameraRef} >
      <TouchableOpacity onPress={() => takePicture()} style={styles.camButton}> 
        <Image source={require("../Assets/cam.png")} style={styles.camImg} />
      </TouchableOpacity>
    </Camera>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      camera: {
        flex: 1,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      camButton: {
        position: 'absolute',
        bottom: 20,
        left: '37%',
      },
      camImg: {
        width: 100,
        height: 100
      }
})

export default Cam;
