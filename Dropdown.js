import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default () => {
    return (
    <View style={styles.dropdown}>
        <View style={styles.options}>
            <View style={styles.row}>
                <Image
                style={styles.rowImage}
                source={{
                uri: "data:image/jpeg;base64,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",
                }}
            />
            <Text style={styles.rowText}>Rename</Text>
            </View>
            <View style={styles.row}>
                <Image
                style={styles.rowImage}
                source={{
                uri: "data:image/jpeg;base64,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",
                }}
            />
            <Text style={styles.rowText}>Copy</Text>
            </View>
        </View>
        <View style={styles.row}>
            <Text style={styles.delete}>Remove</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    dropdown:{
        zIndex:10,
        position:'absolute',
        top: 0,
        right: 0,
        marginTop:25,
        paddingBottom:10,
        paddingHorizontal:10,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        overflow:'visible'
    },
    row:{
        marginTop:10,
        flexDirection:'row',
        zIndex:10,
        width:100
    },
    rowText:{
        marginTop:'auto',
        marginLeft:10,
        zIndex:10
    },
    rowImage:{
        width:20,
        height:20
    },
    options:{
        paddingBottom:10,
        borderBottomColor:"grey",
        borderBottomWidth:1
    },
    delete:{
        marginTop:'auto',
        marginLeft:10,
        zIndex:10,
        color:'red'
    }
  });