
import React,{ Component } from 'react';
import { AppRegistry,TouchableOpacity } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Act from './screens/Act';
import Acceptance from './screens/Acceptance';
import Course1 from './screens/Course1';
import Exercise1 from './screens/Exercise1'
import InnerCritic from './screens/InnerCritic';


const Stack = createStackNavigator();
export default class App extends Component{
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ACT" headerMode='none'>

          <Stack.Screen name="ACT" component={Act}></Stack.Screen>
          <Stack.Screen name="Acceptance" component={Acceptance} />
          <Stack.Screen name="Course1"  component={Course1} />
          <Stack.Screen name="Exercise1" component={Exercise1} />
          <Stack.Screen name="InnerCritic" component={InnerCritic} />
        
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}


AppRegistry.registerComponent('heatmeet', () => App)