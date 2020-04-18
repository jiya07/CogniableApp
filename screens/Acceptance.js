import React,{ Component } from 'react';
import { StyleSheet,View,Text,ImageBackground,Image,Button,TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Acceptance(){

    const navigation = useNavigation();
    return(
        <View style={{backgroundColor:"white"}}>
          <View style={styles.header}>
              <TouchableOpacity style={styles.headerIconLeft} onPress={()=>navigation.navigate('ACT')}>
                <AntDesign name="left" size={24} color="grey"/>
              </TouchableOpacity>

              <Text style={styles.heading}>Acceptance</Text>

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
    </View>
    
    )
}
const styles=StyleSheet.create({
  header:{
    marginTop:50,
    marginBottom:0,
    flexDirection:"row",
  },
  heading:{
    fontSize:20,
    fontWeight:"500"
  },
  headerIconLeft:{
    marginRight:120,
    marginLeft:10
  },
  itemHeader:{
    marginHorizontal:20,
    marginTop:15,
    flexDirection:"row",
    justifyContent:"space-between"
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
    fontSize:25,
    fontWeight:"500",
    marginLeft:20,
    marginBottom:10
  },
  courseText:{
    color:"white",
    fontWeight:"400",
    fontSize:15,
    marginLeft:20
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