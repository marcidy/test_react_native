import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';


export default function Button({
    onPress,
    label = 'b-Laze',
    buttonStyle = styles.button,
    textColor = styles.text,
}) {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textColor}>{label.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 75,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
});
