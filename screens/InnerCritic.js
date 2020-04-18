import React,{ Component } from 'react';
import { StyleSheet,View,Text,Button,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

class MyTabs extends Component {
    render()
    {
      return (
      <Tab.Navigator
        initialRouteName="FirstScreen"
         headerMode= 'none' 
         tabBarOptions={{
            inactiveBackgroundColor:"black",
            pressColor:"white",
             showIcon:true,
             indicatorStyle:{
                width:30,
                height:7,
                borderColor: 'white',
              },
             style:{
                 height:2,
                 borderRadius:10,
                 backgroundColor:"#999999",
                 marginHorizontal:20,
                 width:60,
             },
           
         }}
         
      >
        <Tab.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerTitle:null}}
        />
        <Tab.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{ tabBarLabel: 'Updates' }}
        />
        
      </Tab.Navigator>
    )};
}

export default function InnerCritic(){
  const navigation=useNavigation();
  return(
        <View style={{flex:1,backgroundColor:"white"}}>
          <View style={{marginTop:50,marginBottom:20,flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity style={{marginLeft:-40}} onPress={()=>navigation.pop()}>
              <AntDesign name="left" size={24} color="grey"/>
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:"500"}}>Inner Critic</Text>
            <TouchableOpacity style={{marginRight:-40}} onPress={()=>navigation.navigate('ACT')}>
              <AntDesign name="close" size={25} color="grey"/>
            </TouchableOpacity>
          </View>
          <MyTabs />
        </View>
        
    )
};

function FirstScreen(){
    const navigation=useNavigation()
   return(
      <View style={{backgroundColor:"white",flex:1,padding:20}}>
        <Image style={{width:"100%",height:200,marginBottom:20}}source={{uri:"https://ak3.picdn.net/shutterstock/videos/21606853/thumb/1.jpg"}}/>
        <Text>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life. {'\n'}</Text>
        <Text>The Research {'\n'}</Text>
        <Text>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life.</Text>
        <Text>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life.</Text>
        
        <View style={{position: 'absolute',marginLeft:60,width:300,bottom:20,backgroundColor:"#039BE5",borderRadius:20,height:50,justifyContent:"center"}}>
          <Button title="Continue" color="white" onPress={()=>navigation.navigate('SecondScreen')}/>
        </View>
      </View>
   ) 
}
function SecondScreen(){
    return(
      <View style={{backgroundColor:"white",flex:1,padding:20}}>
        <Text>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life.</Text>
        <Text>The Research</Text>
        <Text>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life.</Text>
        <Text>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life.</Text>
        
        <View style={{position: 'absolute',marginLeft:60,width:300,bottom:20,backgroundColor:"#039BE5",borderRadius:20,height:50,justifyContent:"center"}}><Button title="Continue" color="white" /></View>
    </View>
    ) 
 }