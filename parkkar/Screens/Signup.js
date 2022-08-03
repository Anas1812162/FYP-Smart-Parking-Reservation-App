import React from 'react';
import { StyleSheet, Text,Image, View,Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import { initializeApp } from "firebase/app";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";







export default function Home({navigation}) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmpassword] = React.useState("");
  let [validionMessage, setValidationMessage] = React.useState("");

let validationAndSet = (value, valueToCompare, setValue) => {
  if (value !== valueToCompare){
    setValidationMessage("Passwords do not match!");
  } else {
     setValidationMessage("");
  }
    setValue(value);
};

let signup = ()=>{
  if( password.length >= 8 && password.match(/[A-Z]/g)  && password.match(/[a-z]/g) && password.match(/[0-9]/g) ){ 
    if (password=== confirmPassword ){
    
    createUserWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      
       sendEmailVerification(auth.currentUser)
     // const user = userCredential.user;
      navigation.navigate("Signin", { user: userCredential.user});
 
      
      // Signed in 
      //
      
      
    })
    .catch((error) => {
      setValidationMessage(error.message);
    });
  }
 } else{
      
  Alert.alert('Password must have upper and lowercase letters and its size should be 8 or more characters')
}
 
}

    return(
    <View style={styles.viewcontainer}>
        <Image
      style={styles.tinyLogo}
      source={require('../assets/park2.jpg')}
      />
             <Text style={{marginTop:30, fontSize: 20, fontWeight:'bold',color:'black'}}> Register Your Account </Text>
             
             <Text style={styles.errorText}>{validionMessage}</Text>

             <TextInput  
    
    placeholder="Enter Email Address"
    value={email}
    onChangeText={setEmail}
    
    
    style={styles.txtinp} />

        <TextInput 
       
     
    placeholder="Enter Password" 
    secureTextEntry={true}
    value={password}
    onChangeText={(value)=> validationAndSet(value, confirmPassword, setPassword)}

    style={styles.txtinp} />

<TextInput 
       
     
       placeholder="Confirm Password" 
       secureTextEntry={true}
       value={confirmPassword}
       onChangeText={(value)=> validationAndSet(value, password, setConfirmpassword)}
   
       style={styles.txtinp} />

             <TouchableOpacity disabled={false} onPress={signup}>
      <Text style={styles.touchable}> Register </Text>
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
        marginTop:30,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20
       },
        txtinp:
        {
         padding: 10,
         borderBottomWidth: 2,
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