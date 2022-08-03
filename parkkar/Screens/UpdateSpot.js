import React, {useState, useEffect} from 'react';
import { ScrollView,ImageBackground,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
//import {auth,fire,app,firebase} from "../firebase";
//mport { doc, setDoc } from "firebase/firestore"; 
import * as Location from 'expo-location';
import { SIZES, COLORS, FONTS } from '../Components/theme';
import { NavigationContainer } from '@react-navigation/native';
import locations from '../Components/LocationApi';
import { auth,db } from '../firebase';
import { collection, addDoc, updateDoc } from "firebase/firestore"; 


export default function UpdateSpot({navigation,route}) {


  //const todoRef= firebase.firestore().collection('UserData')

  const [addData,setAddData] = useState('');
  //const [upId,setupId] = React.useState(route.params.updateId)

  let [title2, settitle] = React.useState("");
  let [contactno2, setcontactno] = React.useState("");
  let [descript2, setdescript] = React.useState("");
  let [timings2, settimings] = React.useState("");
  let [price2, setprice] = React.useState("");
  let [image2, setimage] = React.useState("");
  let [loc2, setLoc] = React.useState("");



  //add a new feild

  const addFeild = async ()=>{
   
   /*const docRef =  doc(db, "spots", route.params.updateId)
    updateDoc(docRef, {
      Title: title2,
      contactNo:contactno2,
      description: descript2,
      Timings: timings2,
      Price:price2,
      Imageurl: image2,
      address: loc2,
      UserID: auth.currentUser.uid,
      user_email: auth.currentUser.email
    }) 
    Alert.alert("Congrats your new spot has been updated")
    navigation.navigate("Your Parking spots");*/
    const docRef = await addDoc(collection(db, "Update_User_Data"), {
        Title: title2,
        contactNo:contactno2,
        description: descript2,
        Timings: timings2,
        Price:price2,
        Imageurl: image2,
        address: loc2,
        UserID: auth.currentUser.uid,
        user_email: auth.currentUser.email
      });
      console.log(docRef)
      Alert.alert("Your data will be Updated in 2 hours")
      navigation.navigate("Parking_Spots");

  }



  let locat=1 ;
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const { status1 } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need the permissions to make this work!');
        }
      }
    })();
  }, []);

  const getLocation= async () => {
    const location = await Location.getCurrentPositionAsync();
   console.log(location,location.coords.latitude,location.coords.longitude);
    locat= location;

  }
  
  
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
    
    /* const storage = result.uri; //the storage itself
      let Storageref = ref(storage, result.uri); //how the image will be addressed inside the storage

      //convert image to array of bytes
     // const img = await fetch(result.uri);
     // const bytes = await img.blob();

     // const uploadTask =  uploadBytes(Storageref);
       //upload images*/
      // console.log(Storageref);
    }
  };

  let checkData =() => {
   // console.log(title,contactno,descript,timings,image,loc,locat)
    navigation.navigate("Parking_Spots");
  }
  
  

    return(
      <ScrollView>
      <View style={styles.container}>
         
             <View style={styles.viewcontainer}>
           
             <Text style={{marginTop:10,marginBottom:30, fontSize: 30, fontWeight:'bold',color:'#c5c7c6'}}> Request to Update Spot </Text>
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: image2 }} style={{ width: 350, height: 250,borderRadius: 60,borderWidth: 4,borderColor:'#c5c7c6' }} />
      
      
    </View>
    <TouchableOpacity disabled={false} onPress={pickImage} >
            <Text style={styles.touchable}> Select Image </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 30, fontWeight:'bold',color:'#c5c7c6'}}> Enter Required Data </Text>

             <TextInput  
                   keyboardType='default' 
                   placeholder="Enter Place Title"
                   placeholderTextColor = "#e32636" 
                   value={title2} 
                   onChangeText={settitle}
                   
                 style={{
                    padding: 10,
                    borderBottomWidth: 2,
                    borderColor:'#c5c7c6',
                    marginTop: 30,
                    backgroundColor: '#2d2e2d',
                    color:'#c5c7c6',
                    fontWeight:'bold',
                    fontSize: 20,
                    
                    width: 250
                  }} />
                  <TextInput  
                   keyboardType='default' 
                   placeholder="Enter Contact No."
                   placeholderTextColor = "#e32636"  
                   value={contactno2} 
                   onChangeText={setcontactno}
                 style={{
                    padding: 10,
                    borderBottomWidth: 2,
                    borderColor:'#c5c7c6',
                    marginTop: 30,
                    backgroundColor: '#2d2e2d',
                    color:'#c5c7c6',
                    fontWeight:'bold',
                    fontSize: 20,
                    
                    width: 250
                  }} />

            <TextInput  
                   keyboardType='default' 
                   placeholder="Enter Description"
                   placeholderTextColor = "#e32636"
                   value={descript2} 
                   onChangeText={setdescript}  
                 style={{
                    padding: 10,
                    borderBottomWidth: 2,
                    borderColor:'#c5c7c6',
                    marginTop: 30,
                    color:'#c5c7c6',
                    backgroundColor: '#2d2e2d',
                    fontWeight:'bold',
                    fontSize: 20,
                    
                    width: 250
                  }} />    

<TextInput  
                   keyboardType='default' 
                   placeholder="Enter Timings"
                   placeholderTextColor = "#e32636"  
                   value={timings2} 
                   onChangeText={settimings}
                 style={{
                    padding: 10,
                    borderBottomWidth: 2,
                    borderColor:'#c5c7c6',
                    marginTop: 30,
                    color:'#c5c7c6',
                    backgroundColor: '#2d2e2d',
                    fontWeight:'bold',
                    fontSize: 20,
                    
                    width: 250
                  }} />  

<TextInput  
                   keyboardType='default' 
                   placeholder="Enter Price"
                   placeholderTextColor = "#e32636" 
                   value={price2} 
                   onChangeText={setprice} 
                 style={{
                    padding: 10,
                    borderBottomWidth: 2,
                    borderColor:'#c5c7c6',
                    marginTop: 30,
                    color:'#c5c7c6',
                    backgroundColor: '#2d2e2d',
                    fontWeight:'bold',
                    fontSize: 20,
                    
                    width: 250
                  }} />  

          <Text style={{ marginTop:60,fontSize: 30, fontWeight:'bold',color:'#c5c7c6'}}> Give Location </Text>

          <TextInput  
                   keyboardType='default' 
                   placeholder="Enter Location"
                   placeholderTextColor = "#e32636" 
                   value={loc2} 
                   onChangeText={setLoc} 
                 style={{
                    padding: 10,
                    borderBottomWidth: 2,
                    borderColor:'#c5c7c6',
                    marginTop: 30,
                    color:'#c5c7c6',
                    backgroundColor: '#2d2e2d',
                    fontWeight:'bold',
                    fontSize: 20,
                    
                    width: 250
                  }} />  

            <TouchableOpacity disabled={false} onPress={getLocation} >
            <Text style={styles.touchable}> Get Location </Text>
            </TouchableOpacity>

           

           
            <TouchableOpacity disabled={false} onPress={addFeild} >
            <Text style={styles.touchable}> Submit </Text>
           
            </TouchableOpacity>

            


             </View>
    
      </View>
      </ScrollView>
    )
}


const styles=StyleSheet.create({

    viewcontainer:{
      flex:1,
      alignItems: 'center',
      justifyContent:'flex-start',
      padding: 20,
      
    
    },
    

    viewcont1:{
      flex:0.6,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
      borderWidth:1
     
    },
    viewcont2:{
      flex:0.3,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
      borderWidth:1
     
    },


    tinyLogo: {
        width: 120,
        height: 50,
      },
      txtinp:
      {
       padding: 10,
       borderWidth: 4,
       borderColor:'#8d8f8e',
       margin: 5,
       color:'#c5c7c6',
       fontSize: 20,
       width: 250
      
      },

      touchable:
      {
       color:'#e32636',
       borderColor:'#c5c7c6',
       borderWidth:4,
       borderRadius: 4,
       fontSize:20,
       marginTop:60,
       marginBottom:60,
       fontWeight:'bold',
       backgroundColor: '#2d2e2d',
       paddingTop:10,
       paddingBottom:10,
       paddingLeft:40,
       paddingRight:40
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      container: {
        flex: 1,
        backgroundColor: '#2d2e2d',
      },

});