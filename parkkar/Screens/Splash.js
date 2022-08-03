import React from 'react';
import { ImageBackground,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput } from 'react-native';


export default function Splash({navigation}) {
    return(
      <View style={styles.container}>
        
             <View style={styles.viewcontainer}>
             <Text style={{ marginTop:90, marginBottom: -90,fontSize: 40, fontWeight:'bold',color:'#e32636',borderBottomWidth:3}}> ParKKar </Text>
             

             <Image
                 style={styles.tinyLogo}
                 source={require('../assets/parking.gif')}
                  />  

           

            <TouchableOpacity disabled={false} onPress={() => navigation.navigate('Signin')} >
                  <Text style={styles.touchable}> Let's Go </Text>
            </TouchableOpacity>

             </View>
    
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
        width: 300,
        height: 300,
        alignItems: 'center',
      },
      txtinp:
      {
       padding: 10,
       borderBottomWidth: 4,
       borderColor:'#8d8f8e',
       margin: 5,
       color:'#c5c7c6',
       fontSize: 20,
       width: 250
      
      },

      touchable:
      {
       color:'#e32636',
      // borderColor:'#c5c7c6',
     // borderTopColor:'#e32636',
      //borderRightColor:'#e32636',
     // borderBottomWidth: 4,
      borderWidth:3,
       borderRadius: 4,
       fontSize:25,
       backgroundColor: '#fff',
       //textDecorationLine:'underline',
       marginTop:90,
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
        backgroundColor:"#fff"
      },

});