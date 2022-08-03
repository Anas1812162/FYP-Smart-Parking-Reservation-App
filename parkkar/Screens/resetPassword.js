import React from 'react';
import { StyleSheet, Text,Image, View,Button, TouchableOpacity, TextInput } from 'react-native';
import {auth} from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
export default function Home({navigation}) {
  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
 
  let resetPassword = ()=> {
    sendPasswordResetEmail(auth, email)
  .then(() => {
    navigation.navigate("Signin")
  })
  .catch((error) => {
   setErrorMessage(error.message);
    
  });
  }


    return(
    <View style={styles.viewcontainer}>
        <Image
      style={styles.tinyLogo}
      source={require('../assets/gt-ford.jpeg')}
      />
             <Text style={{margin: 10, fontSize: 20, fontWeight:'bold',color:'black'}}> Reset Your Password </Text>
             
             <Text style={styles.errorText}>
             {errorMessage}

             </Text>

             <TextInput  
    
    placeholder="Enter Email Address"
    value={email}
    onChangeText={setEmail}
    
    
    style={styles.txtinp} />

       

             <TouchableOpacity disabled={false} onPress={resetPassword}>
      <Text style={styles.touchable}> Reset </Text>
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
        marginTop: -120,
        marginBottom: 60,
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
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40
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