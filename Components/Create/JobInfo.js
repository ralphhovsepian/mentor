import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button,BottomSheet,ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {setJobTitle, setDepartment} from '../../redux/reducers/mainReducer';
import {validate} from './../functions/validation';

const JobInfo = ({navigation}) => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.userInfo)
  const [isVisible, setIsVisible] = useState(false);

  const departments = [
    { title: 'Marketing' },
    { title: 'Support' },
    { title: 'Human Resources' },
    { title: 'Product Management' },
    { title: 'Services' },
    { title: 'Legal' },
    { title: 'Accounting' },
    { title: 'Sales' },
    { title: 'Support' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
    },
  ];

  const chooseDepartment = (value) => {
    if(value !== 'Cancel') {
      dispatch(setDepartment(value))
      setIsVisible(false)
    } else {
      setIsVisible(false)
    }
  }

  return (
    <View style={styles.View}>
     
      <Input
        onChangeText={e => dispatch(setJobTitle(e))}
        placeholder='Job title'
        value={state.jobTitle}
      />
      <Text style={styles.text}>Department: {state.department}</Text>
      <Button
      style={{marginBottom: 10}}
      title="Choose department"
      type="outline"
      onPress={() => setIsVisible(true)}
      />
      <Button
        title="Create"
        buttonStyle={{marginTop: 10}}
        onPress={() => validate([state.jobTitle, state.department], navigation, 'Group creation')}
      />
      <BottomSheet isVisible={isVisible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
        {departments.map((department, i) => (
          <ListItem key={i} containerStyle={department.containerStyle} onPress={() => chooseDepartment(department.title)}>
            <ListItem.Content>
              <ListItem.Title style={department.titleStyle}>{department.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
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
  text: {
    marginBottom: 20
  }
})

export default JobInfo;
