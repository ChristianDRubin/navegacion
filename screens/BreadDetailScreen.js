import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const BreadDetailsScreen = ({ route }) => {
    const bread = route.params.bread;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{bread.title}</Text>
            <Text> {bread.description} </Text>
            <Text> ${bread.price} </Text>
            <Text> {bread.weight} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        marginBottom: 10,
    },
});

export default BreadDetailsScreen;