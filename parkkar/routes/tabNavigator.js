import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Dimensions,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput,StatusBar } from 'react-native';
import { createAppContainer } from "react-navigation";
import SignUp from "../Screens/Signup";
import signin from "../Screens/Signin";
import Home from "../Screens/home";
import CreateData from "../Screens/OwnerData";
import PaL from "../Screens/Parking_Locations";
import splash from "../Screens/Splash";
import adminav from "../Screens/AdminScreen";
import resetPassword from "../Screens/resetPassword";
import tS from "../Screens/testScreen";
import locDetails from "../Screens/locDetails";
import user_Profile from '../Screens/userProfile';
import showSpots from '../Screens/showSpots';
//import Icon from 'react-native-vector-icons';
import { Ionicons,Foundation } from "@expo/vector-icons";

const TabNavigator= createMaterialBottomTabNavigator(
{
    Home: {screen:PaL,
        navigationOptions:{
            tabBarIcon: ({tintColor})=> {
                <View>
                   <Ionicons name="ios-home-sharp" size={24} color="black" />
                </View>
            }
        }
    },
       Slot_Data:{
        screen: CreateData,
        navigationOptions:{
            
            tabBarLabel:"Create",
            tabBarIcon: ({tintColor})=>{
                <View>
                <Ionicons style= {[{color: tintColor}]} size={25} name={'ios-home'} />
                </View>
            }
        }
    },

    Profile:{
        screen: showSpots,
        navigationOptions:{
            
            tabBarLabel:"Spots",
            tabBarIcon: ({tintColor})=>{
                <View>
                <Ionicons style= {[{color: tintColor}]} size={25} name={'ios-gallery'} />
                </View>
            }
        }
    },
    Spots:{
        screen: user_Profile,
        navigationOptions:{
            
            tabBarLabel:"Profile",
            tabBarIcon: ({tintColor})=>{
                <View>
                <Ionicons style= {[{color: tintColor}]} size={25} name={'ios-person'} />
                </View>
            }
        }
    },
},
{
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }

);
export default createAppContainer(TabNavigator);
