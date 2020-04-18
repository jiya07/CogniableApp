import React from 'react';
import { StyleSheet,View,Text,Image,Button,TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Course1(){
    const navigation=useNavigation();
    
    return(
      <ScrollView style={styles.mainContainer}>
            <Image style={styles.image}source={require('../assets/selfCompassion.jpg')}/>
            <View style={styles.textContainer}>
                
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Self Compassion</Text>
                    <Text style={styles.time}>30-45 minutes</Text>
                </View>
                <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                
                
                <View style={styles.lessonsCourse}>
                    <Text  style={styles.lesson}>Lessons</Text>
                    <Text style={styles.course}>About this course</Text>
                </View>
                <ScrollView style={{height:330}} showsVerticalScrollIndicator='none'>
                    <TouchableOpacity style={styles.boxContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.boxHeading}>Inner Critic</Text>
                            <Text style={styles.boxText}>5-10min</Text>
                        </View>
                        <Text style={styles.boxText}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                        
                    </TouchableOpacity>
                
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Intention</Text>
                        <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Shame</Text>
                        <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Body</Text>
                        <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Self-care tool</Text>
                        <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Gratitude</Text>
                        <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subHeading}>Closing</Text>
                        <Text style={styles.text}>Take the first step on a journey towards a more constructuve relationship with yourself</Text>
                    </View>
                </ScrollView>
            </View>
            
            <View style={styles.button}>
                <Button title="Start Course" color="white" onPress={()=>navigation.navigate('InnerCritic')}/>
            </View>
      </ScrollView>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"white"
    },
    textContainer:{
        margin:15
    },
    image:{
        width:"100%",
        height:300,
        marginTop:40
    },
    headingContainer:
    {
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5
    },
    heading:
    {   
        color:"#303030",
        fontSize:22,
        fontWeight:"500"
    },
    lessonsCourse:
    {
        marginVertical:15,
        marginHorizontal:5,
        flexDirection:"row"
    },
    lesson:{
        fontSize:20,
        color:"#303030",
        fontWeight:"500"
    },
    course:{
        color:"#90949C",
        marginLeft:30,
        fontSize:20
    },
    time:{
        fontSize:14,
        fontWeight:"200"
    },
    text:{
        fontSize:14,
        fontWeight:"200"
    },
    subHeading:{
        fontSize:15,
        fontWeight:"400"
    },
    subContainer:{
        margin:15
    },
    boxContainer:{
        padding:20,
        backgroundColor:"#039BE5",
        borderRadius:10,
        height:90,
        justifyContent:"center",
        marginVertical:5
    },
    boxHeading:{
        color:"white",
        fontSize:15,
        fontWeight:"600"
    },
    boxText:{
        color:"white"
    },
    button:{
        marginTop:20,
        marginLeft:33,
        alignItems:"center",
        width:350,
        bottom:20,
        backgroundColor:"#039BE5",
        borderRadius:10,
        height:50,
        justifyContent:"center"
    }
})