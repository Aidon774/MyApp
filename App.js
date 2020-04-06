import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Booking from './app/components/Booking.js';
 import Login from './app/components/Login.js';
 import Contact from './app/components/Contact.js';
 import About from './app/components/About.js';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', }}>
      <Image style={{flex: 1, width: null,height: null,flex: 1,position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',}} 
      source={require('./assets/loo.jpg')} />
      <Text style={{color: 'white',fontSize: 27,}}>Welcome To Spider Web Jewelly Store.</Text>
      <Text style={{color: 'white',fontSize: 27, alignItems: 'flex-start', justifyContent: 'flex-start'}}>Swipe >>>>>>>>>>>></Text>
    
     
    </View>
    /* <Button
     onPress={() => navigation.navigate('notifications')}
     title="Go to notifications"
     
   />
   */
  );
}

function AdminLogIn({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'grey' }}>
      

      <Login />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function BookAppointment({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'grey' }}>
      
    <Booking />
    <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ContactUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'grey' }}>
    
     <Contact />
     <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
     //<Button onPress={() => navigation.goBack()} title="Go back home" />
  );
}

function AboutUsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'grey' }}>
      <About />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Admin Login" component={AdminLogIn} />
        <Drawer.Screen name="Book Appointment" component={BookAppointment} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
