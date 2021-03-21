import React, {useState} from 'react';
import { View, StyleSheet, Share } from 'react-native';
import { Avatar, Button, Text,Overlay } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';

const Profile = ({navigation}) => {

 const dispatch = useDispatch();
 const state = useSelector(state => state.userInfo)
 const {firstName, lastName, location, department, jobTitle} = state;
 const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Name: ${firstName, lastName}, Location: ${location}, Department:${department}, Job title:${jobTitle}`
      });
    } catch(e) {
      alert('error occured')
    }
  };


  return (
    <View style={styles.View}>
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <Text h4>First name: {firstName}</Text>
        <Text h4>Last name: {lastName}</Text>
        <Text h4>Location: {location}</Text>
        <Text h4>Department: {department}</Text>
        <Text h4>Job Title: {jobTitle}</Text>
      </Overlay>
        <View style={styles.topContainer}>
            <View style={styles.profileContainer}>
              <Avatar
                size="xlarge"
                rounded
                source={{
                  uri:state.picture,
                }}
            />
            </View>
        </View>
        <View style={styles.userInfoContainer}>
            <Button 
              title="Your info" 
              onPress={() => toggleOverlay()} 
              buttonStyle={styles.infoBtn}/>
            <Button 
              title="Manage groups" 
              onPress={() => navigation.navigate('Manage')} 
              buttonStyle={styles.otherBtns}/>
            <Button 
              title="Share" 
              onPress={() => onShare()} 
              buttonStyle={styles.otherBtns}/>
            </View>
            
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
    width: '100%',
  },
  overlay: {
    width: '90%', 
    height: '40%', 
    justifyContent: 'space-around'
  },
  topContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#2274A5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: 50
  },
  userInfoContainer: {
    width: '100%',
    height: '50%',
    top: 50,
    justifyContent: 'center',
  },
  infoBtn: {
    width: '50%', 
    alignSelf: 'center'
  },
  otherBtns: {
    width: '50%', 
    marginTop: 30,
    alignSelf: 'center'
  }
})

export default Profile;
