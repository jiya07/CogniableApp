import React,{ Component } from 'react';
import { StyleSheet,View,Text,ImageBackground,Image,Button,TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Exercise1(){
    const navigation=useNavigation()
    return(
        <View style={styles.mainContainer}>
            <Image style={styles.image}source={require('../assets/selfCompassion.jpg')}/>
            <View style={styles.textContainer}>
                <View style={styles.headContainer}>
                        <Text style={styles.heading}>Struggles</Text>
                        <Text style={styles.time}>5-10 minutes</Text>
                </View>
                <Text style={styles.text}>Today is the first step on your our journey towards a more constructive and loving relationship with yourself. In this first lesson you will get a feeling of what self-compassion is and how it can help in your life.</Text>
            </View>
            <View style={styles.button}>
                <Button title="Start the Course" color="white" onPress={()=>navigation.navigate('InnerCritic')}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
    flex:1,
    backgroundColor:"white"
    },
    textContainer:{
        margin:15,
        flex:1
    },
    image:{
        width:415,
        height:300,
        marginTop:40
    },
    headContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5
    },
    heading:{
        color:"#303030",
        fontSize:22,
        fontWeight:"500"
    },
    time:{
        fontSize:14,
        fontWeight:"200"
    },
    text:{
        fontSize:14,
        fontWeight:"200"
    },
    button:{
        position: 'absolute',
        marginLeft:50,
        width:300,
        bottom:20,
        backgroundColor:"#039BE5",
        borderRadius:20,
        height:50,
        justifyContent:"center"
    }

})