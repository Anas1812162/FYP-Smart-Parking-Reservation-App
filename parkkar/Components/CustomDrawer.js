import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

//export default function CustomDrawer({navigation,props}) {
const CustomDrawer =(props)=>{

   
    return (
        <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
       <DrawerItemList {...props} />
      </DrawerContentScrollView>
      
      </View>
      
    )
}

export default CustomDrawer