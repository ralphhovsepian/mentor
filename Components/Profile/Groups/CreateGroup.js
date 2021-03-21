import React, {useState} from 'react';
import { View,ScrollView, StyleSheet } from 'react-native';
import { Input, Button, Text,CheckBox } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {addWorker} from './../../../redux/reducers/groupReducer'
import AsyncStorage from '@react-native-community/async-storage';

const CreateGroup = ({navigation}) => {

 const dispatch = useDispatch()
 const state = useSelector(state => state.userInfo)
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



const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify({
      user: state,
      group: data
    }));
    setWorkersList(workers)
    navigation.navigate('Profile');
  } catch (error) {
    console.log(error);
    alert('error');
  }
};


const saveGroup = () => {
  if(groupName !== "" && workersList.some(worker => worker.enable == true)) {
  let filteredGroup = workersList.filter(worker => worker.enable == true);
  let groupStructure = {
    id: groupWork.length + 1,
    name: groupName,
    employees: filteredGroup
  }
  dispatch(addWorker(groupStructure))
  storeData(groupWork);
  } else {
    alert('Fill out everything')
  }
}


  return (
    <ScrollView style={styles.View}>
            <Text style={styles.title}>Create new group</Text>
            <Input
            placeholder='Group name'
            value={groupName}
            onChangeText={(v) => setGroupName(v)}
            /> 
         <Button title="Create group" onPress={() => saveGroup()} buttonStyle={{width: '100%', margin: 30,alignSelf: 'center'}}/>
            <View style={{width: '100%'}}>
        {
            
            workers.map((worker, i) => {
               return(<CheckBox
                    key={i}
                    title={`${worker.first_name} ${worker.last_name}`}
                    checked={worker.enable}
                    onPress={() => toggleWorker(worker, i)}
                  />
                  )
            })
           
        }
         </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  View: {
    width: '90%',
    marginTop: 50,
    left: '5%'
  },
  title: {
    fontSize: 22,
     alignSelf: 'center'
  }
})

export default CreateGroup;
