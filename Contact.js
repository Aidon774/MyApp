import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Booking extends React.Component {
    render() {
        return (
            <View style={styles.bookingform}>

                
            <Text style={styles.header}>Contact Details</Text>
            <Text style={{fontSize:24}}>Cell/WhatsApp: +260968868986
           </Text>
            <Text style={{fontSize: 20}}> Email: aidonmwale5@gmail.com</Text>
            
            <Text style={{fontSize:17, marginBottom:30}}>SkypeID: live:aidonmwale5</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bookingform: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
        
    },
      
        
    
});