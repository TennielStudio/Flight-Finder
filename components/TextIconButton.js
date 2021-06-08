import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {COLORS, SIZES, FONTS} from "../constants"

const styles = StyleSheet.create({
    touchable: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
      
    },

    buttonTextStyle: {
        marginRight: SIZES.base,
        ...FONTS.h2,
       
     }
})

const TextIconButton = ({label, icon, customContainerStyle, customLabelStyle, onPress}) => {

    return(
        <TouchableOpacity
            style={[styles.touchable, {...customContainerStyle}]}
            onPress={onPress}
        >
            <Text style={[styles.buttonTextStyle,{ ...customLabelStyle}]}>{label}</Text>
        
            <Image 
                source={icon}
                style={{
                    width:25, 
                    height: 25
                }}
            />
        </TouchableOpacity>
    )
}

export default TextIconButton;

