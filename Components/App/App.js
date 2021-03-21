import React from 'react';
import { View } from 'react-native';
import Basic from '../Create/Basic';
import JobInfo from '../Create/JobInfo';
import GroupCreate from '../Create/GroupCreate';
import Profile from '../Profile/Profile';
import Manage from '../Profile/Groups/Manage';
import CreateGroup from '../Profile/Groups/CreateGroup'
import EditGroup from '../Profile/Groups/EditGroup'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

const Stack = createStackNavigator();

  return (
    
      <NavigationContainer>
          <View style={{flex: 1}}>
            <Stack.Navigator>
              <Stack.Screen name="First step" component={Basic} />
              <Stack.Screen name="Final step" component={JobInfo} />
              <Stack.Screen name="Group creation" component={GroupCreate} />
              <Stack.Screen name="Profile" component={Profile} options={{gestureEnabled: false, headerLeft: null}}/>
              <Stack.Screen name="Manage" component={Manage}/>
              <Stack.Screen name="Create Group" component={CreateGroup}/>
              <Stack.Screen name="Edit Group" component={EditGroup}/>
            </Stack.Navigator>
          </View>
      </NavigationContainer>
  );
  
}

