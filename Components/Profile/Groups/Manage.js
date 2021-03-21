import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
const Manage = ({navigation}) => {

 const groups = useSelector(state => state.workGroup)

 const allGroups = groups.map((group, i) => {
      return(
      <ListItem 
        key={i} 
        containerStyle={{ width: '100%' }} 
        onPress={() => navigation.navigate('Edit Group', {id: i})} 
        bottomDivider>
        <ListItem.Content>
           <ListItem.Title>{group.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>)
  })


  return (
    <View style={styles.View}>
       <View style={{alignItems:'center'}}>
         <Button 
          title="Create group" 
          onPress={() => navigation.navigate('Create Group')} 
          containerStyle={styles.createBtn}
         />
       </View>
         <Text h4 h4Style={{margin:10}}>Manage:</Text>
        {allGroups}
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    width: '100%',
  },
  createBtn: {
    width: '70%', 
    margin: 30,
    alignSelf: 'center'
  }
})

export default Manage;
