import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Booking extends React.Component {
    render() {
        return (
            <View style={styles.bookingform}>

                
            <Text style={styles.header}>Admin Login</Text>
            <TextInput style={styles.textinput} placeholder= "User Name"
            underlineColorAndroid={"transparent"} />
            <TextInput style={styles.textinput} placeholder= "Password"
            underlineColorAndroid={"transparent"} />
           
            <TouchableOpacity style={styles.button}>
                <Text styles={styles.btntext}>Login</Text>
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
        paddingBottom: 10,
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