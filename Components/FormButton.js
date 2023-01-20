import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { windowHeight } from "../utils/Dimension";

const FormButton = ({buttonTitle, ...rest}) =>{
    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 20,
      width: '100%',
      height: windowHeight / 16,
      backgroundColor: '#a3297a',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
    },
  });