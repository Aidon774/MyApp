import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Booking extends React.Component {
    render() {
        return (
            <View style={styles.bookingform}>

                
            <Text style={styles.header}>Appointment Booking</Text>
            <TextInput style={styles.textinput} placeholder= "Your FirstName"
            underlineColorAndroid={"transparent"} />
            <TextInput style={styles.textinput} placeholder= "Your LastName"
            underlineColorAndroid={"transparent"} />
            <TextInput style={styles.textinput} placeholder= "Email Address"
            underlineColorAndroid={"transparent"} />
            <TextInput style={styles.textinput} placeholder= "Cellphone Number"
            underlineColorAndroid={"transparent"} />
            <TextInput style={styles.textinput} placeholder= "Your Location"
            underlineColorAndroid={"transparent"} />
            <TextInput style={styles.textinput} placeholder= "Date/Time of Appointment (Hrs:Min-DD/MM/YYYY)"
            underlineColorAndroid={"transparent"} />


            <TouchableOpacity style={styles.button}>
                <Text styles={styles.btntext}>Submit</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bookingform: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'


    },
    header: {
        fontSize: 24,
        color: '#fff',
        //paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
        
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,  
        marginBottom: 20
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
});