import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../styles/colors';

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
        borderRadius: 18,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    }
});

