import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import colors from '../../config/colors';
import icons from '../../config/icons';

export default function Botao({ type, icon, direction, children, onPress }) {
   return (
        <>
            <TouchableOpacity
                style = {[styles.button, { backgroundColor: colors.bg[type], flexDirection: icons[direction] }]}
                onPress = {onPress}
            >
                <Text style = {[styles.text, { color: colors.text[type] }]}>
                    {children}
                </Text>
                <MaterialCommunityIcons name = {icon} size={24} color= {colors.icon[type]} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text : {
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
    }
})

Botao.defaultProps = {
    type: 'primary',
    direction: 'esquerda'
}