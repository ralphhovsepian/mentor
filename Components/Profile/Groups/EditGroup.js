import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { Input, Button, ListItem,Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {editGroup} from './../../../redux/reducers/groupReducer'
import AsyncStorage from '@react-native-community/async-storage';

function EditGroup({route, navigation}) {
    
  const { id } = route.params;
  const dispatch = useDispatch()
  const groups = useSelector(state => state.workGroup)
  const state = useSelector(state => state.userInfo)
  const [employees, setEmployees] = useState(groups[id].employees);
  const [groupName, setGroupName] = useState(groups[id].name);


  const renderItem = useCallback(
    ({ item, index, drag }) => {
      return (
      <TouchableOpacity onLongPress={drag}>
         <ListItem key={index} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.first_name} {item.last_name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      </TouchableOpacity>
      );
    },
    []
  );

  const saveGroup = () => {
  if(groupName !== "") {
    let edited = groups;
        edited[id].employees = employees;
        edited[id].name = groupName;

    dispatch(editGroup(edited))
    storeData(edited)

  } else {
    alert('Name shouldnt be empty')
  }
}

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify({
      user: state,
      group: data
    }));
    navigation.navigate('Profile');
  } catch (error) {
    alert('error');
  }
};

  return (
    <View style={styles.View}>
       <Input
         label={"Edit name"}
         value={groupName}
         onChangeText={(v) => setGroupName(v)}
        />
        <Button
          buttonStyle={styles.saveBtn}
          title="Save changes"
          onPress={() => saveGroup()}
        />
        <Text h4 h4Style={styles.label}>Press and hold to drag</Text>
       <DraggableFlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.id}`}
        onDragEnd={({ data }) => setEmployees(data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  View: { 
    flex: 1, 
    paddingTop:50 
  },
  saveBtn: {
    width: '90%', 
    margin: 30,
    alignSelf: 'center'
  },
  label: {
    margin: 10
  }
})

export default EditGroup;