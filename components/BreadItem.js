import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const BreadItem = ({ item, onSelected }) => {
    return(
        <TouchableOpacity onPress={()=> onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                   <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                   <Text style={styles.details}>{item.price}</Text>
                   <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    breadItem:{
        padding: 20,
        borderRadius: 3,
        margin:10,
        backgroundColor: '#ccc'
    },
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },
    details:{
        fontSize:18,
    }
})

export default BreadItem;

