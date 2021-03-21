import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {Input, Button, CheckBox  } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {addWorker} from './../../redux/reducers/groupReducer'
import AsyncStorage from '@react-native-community/async-storage';

const GroupCreate = ({navigation}) => {

 const dispatch = useDispatch()
 const state = useSelector(state => state.userInfo)
 const {firstName, lastName, location, picture, department, jobTitle} = state;
 const workers = useSelector(state => state.workers)
 const groupWork = useSelector(state => state.workGroup)
 const [workersList, setWorkersList] = useState(workers);
 const [groupName, setGroupName] = useState('');

const toggleWorker = (worker, index) => {
let count = 0;
for (let index = 0; index < workersList.length; index++) {
    if(workersList[index].enable == true) {
      count++;
    }
}
 let changedWorker = workersList;
  if(count < 5) {
      changedWorker[index].enable = !changedWorker[index].enable;
      setWorkersList([...changedWorker])
  } else {
    if(changedWorker[index].enable) {
      changedWorker[index].enable = !changedWorker[index].enable;
      setWorkersList([...changedWorker])
    } else {
      alert('Maximum employees is 5')
    }
  }
}

const saveGroup = () => {
  if(groupName !== "" && workersList.some(worker => worker.enable == true)) {
  let filteredGroup = workersList.filter(worker => worker.enable == true);
  let groupStructure = {
    id: groupWork.length + 1,
    name: groupName,
    employees: filteredGroup
  }
  dispatch(addWorker(groupStructure))
  storeData();
  navigation.navigate('Profile');
  } else {
    alert('Fill out everything')
  }
}

const storeData = async () => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify({
      user: {
        firstName,
        lastName,
        location,
        picture,
        department,
        jobTitle
      },
      group: groupWork
    }));
  } catch (error) {
    alert('error');
  }
};

  return (
    <ScrollView style={styles.View}>
        <Text style={styles.title}>Create new group</Text>
        <Input
        value={groupName}
        onChangeText={e => setGroupName(e)}
        placeholder='Group name'
        /> 
         <Button
        title="Create"
        buttonStyle={{marginBottom: 10}}
        onPress={() => saveGroup()}
        />
        {
            workersList.map((worker, i) => {
                return(<CheckBox
                    key={i}
                    title={`${worker.first_name} ${worker.last_name}`}
                    checked={worker.enable}
                    onPress={() => toggleWorker(worker, i)}
                  />
                  )
            })
        }
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  View: {
    width: '90%',
    left: '5%',
    paddingBottom: 100,
    marginTop: 50
  },
  title: {
      fontSize: 22
  }
})

export default GroupCreate;
