import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Button, Image,TextInput, TouchableOpacity, } from 'react-native';
//import { State } from 'react-native-gesture-handler';
import InlineTextButton from '../Components/InlineTextButton';
import {auth, currentUser} from "../firebase";
import {  signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
//import { appscreeen } from '../styles/styles';
//import {Navigation} from 'react-navigation';




export default function Sign_in({navigation}) {

  //navigation = appscreeen;

  if(auth.currentUser){
    navigation.navigate("Parking_Spots");
  }
  else{
    onAuthStateChanged(auth, (user) => {
      if (user) {
     navigation.navigate("Parking Spots");
      } 
    });
  }


  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");


let login = () =>{
  
  if(email !== "" && password != ""){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigation.navigate("Parking_Spots", { user : userCredential.user});
  })
  .catch((error) => {
    setErrorMessage(error.message)
  });
  }
  else {
    setErrorMessage("Please enter Correct Credentials");
  }
}



    return(
        
     
      
      
    <View style={styles.viewcontainer}>

      <Image
      style={styles.tinyLogo}
      source={require('../assets/park.jpg')}
      
      />
        
<Text style={{ fontSize: 20, fontWeight:'bold',color:'black'}} onPress={() => navigation.navigate('Admin Signin')} > Login to your Account </Text>
<Text style={styles.errorText}>{errorMessage}</Text>


<TextInput  
    
      placeholder="Enter Username"
      value={email}
      onChangeText={setEmail}
      
      
      style={styles.txtinp} />

          <TextInput 
         
       
      placeholder="Enter Password" 
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}

      style={styles.txtinp} />
      
      <Text style={{margin: 20, fontSize: 15, fontWeight:'bold',color:'black'}} onPress={() => navigation.navigate('SignUp')} > Don't have an Account?</Text>
       
      
      <Text style={{marginTop: -5, fontSize: 15, fontWeight:'bold',color:'black'}}onPress={() => navigation.navigate('Password_Reset')}> Forgot Password?</Text>
      


        <TouchableOpacity disabled={false} onPress={login}>
      <Text style={styles.touchable}>   Login   </Text>
      </TouchableOpacity>

      



      

   

    </View>
    

    )
}


const styles=StyleSheet.create({

    viewcontainer:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
      
      
    
    },
    tinyLogo: {
      width: 390,
      //height: 300,
      marginTop: -40,
      marginBottom: 30,
      height: 380,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      overflow: 'hidden',
      
    },

    viewcont1:{
      flex:0.5,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
     
    },

     touchable:
     {
      color:'black',
      borderColor:'#e32636',
      borderWidth:2,
      borderRadius: 4,
      fontSize:20,
      marginTop:20,
      fontWeight:'bold',
      paddingTop:5,
      paddingBottom:5,
      paddingLeft:20,
      paddingRight:20
     },
      txtinp:
      {
       padding: 10,
      // borderTopWidth:3,
       borderBottomWidth: 3,
       borderColor:'#e32636',
       marginTop: 10,
       
       width: 250,
       
      
      },
      container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
      errorText:{
        color: "#ff0000"
      }
});