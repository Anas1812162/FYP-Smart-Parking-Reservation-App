import React,{useState,useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import {Ionicons,FontAwesome,Entypo, MaterialCommunityIcons,MaterialIcons} from "@expo/vector-icons";
import {auth,currentUser} from "../firebase"
import {signOut} from 'firebase/auth';

export default function User_Profile({navigation}) {

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
       
        if (status !== 'granted') {
          alert('Sorry, we need the permissions to make this work!');
        }
      }
    })();
  }, []);

 // const [em,setem]= React.useState()
 let [image, setimage] = React.useState("");
 //auth.currentUser.displayName="Anas Rana";
 const name = auth.currentUser.displayName;
 const number = auth.currentUser.phoneNumber;
 const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
   setimage(result.uri);
  }
};


let logout = ()=>{
    signOut(auth).then(()=>{

      navigation.navigate('Signin')
    })
}


    return(
      <View style={styles.container}>
         
         <View style={styles.userInfoSection}>
        
          <Avatar.Image 
            source={{ uri: image }}
            size={150}
            style={{alignSelf:"center",justifyContent:"center"}}
           
         
          />
          <View style={{marginLeft: 20}}>
            <Text style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
              color:"white"
            }] }   >{auth.currentUser.email}</Text>
            <Text style={styles.caption}>ParKKar</Text>
          </View>
        
      </View>

     

      

      <View style={styles.menuWrapper}>
      <Text style={{fontSize:20,paddingLeft:35,fontWeight:"bold",paddingBottom:20,color:"white"}}>Menu Items</Text>
        <TouchableRipple onPress={() => {navigation.navigate('Favourates')}}>
          <View style={styles.menuItem}>
            <MaterialIcons name="favorite-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favourates</Text>
          </View>
        </TouchableRipple>
        
       
        <TouchableRipple onPress={()=>navigation.navigate('Password_Reset')} >
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="form-textbox-password" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Reset Password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={pickImage} >
          <View style={styles.menuItem}>
            <Ionicons name="image-sharp" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Change Profile Photo</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={logout}>
          <View style={styles.menuItem}>
            <Ionicons name="md-log-out-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Sign Out</Text>
          </View>
        </TouchableRipple>
      </View>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2e2d',
  },
  userInfoSection: {
   
    paddingHorizontal: 30,
    marginTop:140,
    marginBottom: 20,
    justifyContent:"center"
  },
  title: {
    
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  caption: {
   // marginTop:20,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    alignSelf: "center",
    fontWeight:"bold",
    fontStyle:"italic",
    color:"white"
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    marginTop:30,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    
  
  },
  menuItemText: {
    color:"white",
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    fontWeight:"bold"
  },
});