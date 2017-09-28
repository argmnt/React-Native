import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const {onPress, buttonText, editable=true} = props;

  const containerStyles = [styles.container];
  if (editable === false){
      containerStyles.push(styles.containerDisabled);
  }
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
      styles.$buttonBackgroundColorModifier,
    );
  return (
    <View style={styles.container} >
        <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
            <Text underlineColorAndroid="transparent" style={styles.buttonText} >{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput underlineColorAndroid="transparent" style={styles.input} {...props} />
    </View>
  );
}

InputWithButton.PropTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;