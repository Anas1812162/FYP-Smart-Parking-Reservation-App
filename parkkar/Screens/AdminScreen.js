import React, {useState} from 'react';
import { FlatList,ScrollView,StyleSheet, Text, View, Button, Image,TouchableOpacity } from 'react-native';

export default function adminav({navigation}) {


     


    return(

        
      <View style={styles.viewcontainer}>
         <Text style={{ fontSize: 35, fontWeight:'bold',color:'#e32636'}}> All Users </Text>
        <View style={styles.viewcont1}>
        
          <ScrollView >
              
                  <Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Anas Rana'    userID: 'anasrana.ar'   
                              contact:'032865123'</Text>
                              <Text></Text>

                  <Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Wasi Rana' userID: 'wasirana313'   
                              contact:'0321216513'</Text>
                              <Text></Text>

                  <Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Talha Rana' userID: 'talha.rana5#6'   
                              contact:'0326966513'</Text>
                              <Text></Text>

                 <Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Salman Budha' userID: 'salman.budha2'   
                              contact:'03415765123'</Text>
                              <Text></Text>

                <Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Ahsaan Khattri' userID: 'ahsaan123#'   
                               contact:'03417005123'</Text>
                               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Fiza Ahamed' userID: 'Fiza3$3'   
               contact:'032346513'</Text>     
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Aqsa Sohail' userID: 'AqSa43!'   
               contact:'032346003'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Nida Nadeem' userID: 'Nida56Nadeem'   
               contact:'032874567'</Text>       
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Jahanir johan' userID: 'Johan47#'   
               contact:'032390513'</Text>  
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Harold Jacob' userID: 'Jacob919'   
               contact:'032388603'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Hassan Mangrio' userID: 'Mangrio775'   
               contact:'0323409713'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Hussain Ahmed' userID: 'Hussi989!@'   
               contact:'03200087013'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Zeeshan Waqar' userID: 'ZeesHan$#'   
               contact:'03297777513'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Yousuf Abbas' userID: 'Yousi314@'   
               contact:'032456908'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Eric John' userID: 'Eric878^'   
               contact:'0323987713'</Text>   
               <Text></Text>

<Text style={{fontSize:16,color:'#34b1eb'}}>Name: 'Om Prakash' userID: 'Ompali765#'   
               contact:'0309247929'</Text>           




            

         

        
        </ScrollView> 
          

      </View>
        <View style={styles.viewcont2}>
        
        <TouchableOpacity disabled={false} >
             <Text style={styles.touchable}> Add User </Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={false} >
             <Text style={styles.touchable}> Update User </Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={false} >
             <Text style={styles.touchable}> Delete User </Text>
        </TouchableOpacity>


    
        </View>
      </View>
    )
}


const styles=StyleSheet.create({

    viewcontainer:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#202121',
      padding: 20,
      
    
    },
    

    viewcont1:{
      flex:0.6,
      alignItems: 'center',
      justifyContent:'center',
    
      padding: 20,
      
     
    },
    viewcont2:{
      flex:0.3,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
      
     
    },


    tinyLogo: {
        width: 300,
        height: 150,
      },
      txtinp:
      {
       padding: 10,
       borderWidth: 4,
       borderColor:'#800000',
       margin: 5,
       width: 250
      
      },

      touchable:
      {
       color:'#34b1eb',
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

      touchable1:
      {
       color:'#34b1eb',
       borderColor:'#e32636',
       justifyContent:'center',
       fontSize:20,
       marginTop:10,
       fontWeight:'bold',

      }
});