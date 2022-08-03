import React,{useEffect,useState} from 'react';
import { FlatList,ImageBackground,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput } from 'react-native';
import locations from '../Components/LocationApi';
import { SIZES, COLORS, FONTS } from '../Components/theme';
import { Ionicons,Foundation } from "@expo/vector-icons";
import { auth,db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 

export default function Request_Update({navigation}) {

const [datainfo,setdatainfo] = React.useState([]);
const colRef = collection(db, 'Update_User_Data')

useEffect(async()=>{
     await getDocs(colRef)
    .then((snapshot)=>{
        const info = []
        snapshot.docs.forEach((doc)=>{
            info.push({ ...doc.data(),id: doc.id}) 
           })
          // console.log(info);
           setdatainfo(info);
    })
})

const DeleteDocument=(id)=>{
    const docRef = doc(db, 'Update_User_Data',id)
    deleteDoc(docRef)
    .then(()=>{

    })
}



  function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', height: 50,marginTop:10,marginBottom:30 }}>
            

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: '70%',
                        height: "100%",
                        backgroundColor:'#2d2e2d',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        
                    }}
                >
                    <Text style={{ ...FONTS.h3 ,color:"#e32636",}}>User Updates Request</Text>
                </View>
            </View>

            
        </View>
    )
}




function renderRestaurantList() {
    
  const renderItem = ({ item }) => (
    
      <TouchableOpacity
          style={{ marginBottom: SIZES.padding * 2 }}
         // onLongPress={DeleteDocument.bind(this, item.id)}
          onPress={() => navigation.navigate('Location Details',{locId:item.id,
          imurl:item.Imageurl, time: item.Timings, Heading: item.Title, desc: item.description, addr: item.address, pr:item.Price})}
          
      >
          {/* Image */}
          
          {/* Restaurant Info */}
          <Text style={{ ...FONTS.body2 }}>From: {item.user_email}</Text>
          <Text style={{ ...FONTS.body2 }}>User ID: {item.UserID}</Text>
          <Text style={{ ...FONTS.body2,marginBottom:10 }}>Spot: {item.Title}</Text>

         
                
                
      </TouchableOpacity>
  )

  return (
      <FlatList
      showsVerticalScrollIndicator={false}
     // keyExtractor={(item) => item.id}
      data={datainfo}
      renderItem={renderItem}
      
          contentContainerStyle={{
              //paddingHorizontal: SIZES.padding * 2,
              paddingBottom: 30,
             // paddingRight:30,
              width:400

          }}
      />
  )
}







    return(
      <View style={styles.viewcontainer}>
        {renderHeader()}
        {renderRestaurantList()}
                 
      </View>
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
        marginTop:212,
        width: 400,
        height: 300,
        alignItems: 'center',
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
       fontSize:25,
       backgroundColor: '#202121',
       //textDecorationLine:'underline',
       marginTop:60,
       fontWeight:'bold',
       
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
      },

});