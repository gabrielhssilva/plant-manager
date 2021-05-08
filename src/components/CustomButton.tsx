import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
}

export function CustomButton({ title, ...rest }: CustomButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            {...rest}
        >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    }
});

