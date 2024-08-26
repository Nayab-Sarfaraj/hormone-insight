import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Header = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Feather name="menu" size={22} color="#49454F" />
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Hormone Insight</Text>
            <FontAwesome name="user-circle-o" size={22} color="#49454F" />

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})