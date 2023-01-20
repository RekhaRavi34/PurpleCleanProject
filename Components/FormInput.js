import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimension";
import Ionicons from 'react-native-vector-icons/Ionicons';

const FormInput = ({labelValue, placeholderText, iconType, onPress,  ...rest}) =>{
    return(
        <View style={styles.inputContainer}>
            <TextInput
            value={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor="grey"
            {...rest}/>     
            <View style={styles.iconStyle} >
            <Ionicons name={iconType} size={25} color="grey" onPress={onPress}/>
            </View>
        </View>
    );
}
export default FormInput;

const styles= StyleSheet.create({
      inputContainer: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 16,
        borderColor: '#ccc',
        borderRadius: 6,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        // borderWidth: 1,
      },
});