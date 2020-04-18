import React,{ Component } from 'react';
import { StyleSheet,View,Text,ImageBackground,Image,Button,TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearTextGradient } from "react-native-text-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';


export default function Act() {
    const navigation = useNavigation();
    
      return(
        <ScrollView style={styles.mainContainer}>
           <View style={styles.header}>
              <TouchableOpacity style={styles.headerIconLeft}>
                <AntDesign name="left" size={24} color="grey"/>
              </TouchableOpacity>

              <Text style={styles.heading}>ACT</Text>

              <TouchableOpacity style={styles.headerIconRight}>
                <Feather name="users" size={25} color="grey"/>
              </TouchableOpacity>
          </View>
          <View style={styles.userDetails}>
            <Image style={styles.profilePic} source={require('../assets/profilePic.jpg')}/>
            <View>
              <Text style={styles.userName}>Manoj Singh</Text>
              <Text style={styles.userRelation}>Kshitiz's Father</Text>
            </View>
          </View>
         
          
          <ImageBackground style={styles.hexagon} source={require('../assets/Hexagon.png')} >
              <LinearTextGradient  style={{ fontWeight: "700", fontSize: 50}}
                  locations={[0, 1.5]}
                  colors={['red', 'blue']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}>
                      <Text>12%</Text>
              </LinearTextGradient>
              <Text style={{fontWeight:"200",fontSize:16}}>
                Psycological Flexibility
              </Text>
          </ImageBackground>
            
            
          <View style={styles.options}>
            <View style={{transform: [{ rotate: '-30deg'}],marginTop:-95,width:120,height:40,marginLeft:50}}>
              <Button title="Acceptance" color="#555555" onPress={()=>navigation.navigate('Acceptance')}/></View>
            <View style={{transform: [{ rotate: '30deg'}],width:120,marginLeft:220,marginTop:-40}}>
              <Button title="Present" color="#555555"/></View>
              
            <View style={{flexDirection:"row",marginTop:80,justifyContent:"space-between"}}>
              <View style={{transform: [{ rotate: '-90deg'}],width:150,marginLeft:-30}}>
                <Button title="Defusion" color="#555555"/></View>
              <View style={{transform: [{ rotate: '90deg'}],width:150,marginRight:-5}}>
                <Button title="Values" color="#555555"/></View>
              </View>
            
            <View style={{transform:[{rotate:'30deg'}],marginTop:98,marginLeft:40,width:150}}>
              <Button title="Self as Context" color="#555555"/></View>
            <View style={{transform:[{rotate:'-30deg'}],marginLeft:190,marginTop:-37,width:160}}>
              <Button title="Commited Action" color="#555555"/></View>
          </View>
          
          <View name="Courses">
            <View style={styles.itemHeader}>
              <Text style={styles.itemHeading}>Courses</Text>
              <TouchableOpacity>
                <AntDesign name="arrowright" color="grey" size={30}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Course1')}>
              <View>
                <ImageBackground imageStyle={{ borderRadius: 7}} style={styles.courseImage} source={require('../assets/selfCompassion.jpg')}>
                  <Text style={styles.courseHeading}>Self Compassion</Text>
                  <Text style={styles.courseText}> Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <ImageBackground imageStyle={{ borderRadius: 7}} style={styles.courseImage} source={require('../assets/image2.jpeg')}>
                  <Text style={styles.courseHeading}>Coping with Crisis</Text>
                  <Text style={styles.courseText}> Take the first step on a journey towards a more constructuve relationship with yourself</Text>
              </ImageBackground></View>
            </TouchableOpacity>
          </View>
         
          <View name="Exercises">
            <View  style={styles.itemHeader}>
                <Text style={styles.itemHeading}>Exercises</Text>
                <TouchableOpacity>
                  <AntDesign name="arrowright" color="grey" size={30}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.exerciseContainer} onPress={()=>navigation.navigate('Exercise1')}>   
                <Image style={styles.exerciseImage} source={require('../assets/struggle.png')}/>
              <View>
                <Text style={styles.exerciseHeading}>Struggles</Text>
                <Text style={styles.exerciseText}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
              </View>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.exerciseContainer}>   
                <Image style={styles.exerciseImage} source={require('../assets/struggle.png')}/>
              <View>
                <Text style={styles.exerciseHeading}>Compassion break</Text>
                <Text style={styles.exerciseText}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
              </View>
             
            </TouchableOpacity>
          </View> 
          
        </ScrollView>
      )
    
  }

  const styles=StyleSheet.create({
    mainContainer:{
      backgroundColor:"white",
      flex:1,
    },
    header:{
      marginTop:50,
      marginBottom:0,
      flexDirection:"row",
      justifyContent:"space-around"
    },
    heading:{
      fontSize:20,
      fontWeight:"500"
    },
    headerIconLeft:{
      marginLeft:-40
    },
    headerIconRight:{
      marginRight:-40
    },
    hexagon:{
      justifyContent:"center",
      alignItems:"center",
      width:300,
      height:300,
      marginTop:35,
      marginLeft:45
    },
    userDetails:{
      flexDirection:"row",
      marginTop:20,
      alignItems:"center",
      marginHorizontal:15
    },
    profilePic:{
      width:70,
      height:70,
      margin:10,
      marginRight:15,
      borderRadius:10
    },
    userName:{
      fontSize:27,
      marginVertical:5,
      fontWeight:"400"
    },
    userRelation:{
      fontSize:20,
      color:"#808088",
      marginBottom:10
    },
    options:{
      marginTop:-200
    },
    itemHeader:{
      marginHorizontal:20,
      marginTop:35,flexDirection:"row",justifyContent:"space-between"
    },
    itemHeading:{
      color:"grey",
      fontSize:25,
      fontWeight:"500"
    },
    courseImage:{
      width:375,
      height:180,
      marginTop:15,
      marginHorizontal:17,
    },
    courseHeading:{
      color:"white",
      marginTop:75,
      fontSize:30,
      fontWeight:"500",
      marginLeft:10
    },
    courseText:{
      color:"white",
      fontWeight:"400",
      fontSize:15,
      marginLeft:10
    },
    exerciseContainer:{
      marginTop:20,
      bottom:10,
      marginHorizontal:20,
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowOffset: {
        height: 0,
        width: 0
      },
      elevation:2,
      borderRadius:10,
      height:100,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      backgroundColor:"white"
    },
    exerciseImage:{
      width:50,
      height:50,
      margin:10
    },
    exerciseHeading: {
      fontSize:20,
      fontWeight:"500",
      color:"grey"
    },
    exerciseText:{
      color:"#777777"
    }
  })