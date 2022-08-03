import { createDrawerNavigator } from 'react-navigation-drawer';
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
import Icon from 'react-native-vector-icons';

const Drawer= createDrawerNavigator(
{
    Home: {screen:PaL,
        navigationOptions:{
            
            
        }
    },
       Slot_Data:{
        screen: CreateData
    },
}



);
export default createAppContainer(Drawer);
