import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StarHormoneCard = ({ item }) => {
    console.log(item)
    const name = item.name.split(",")
    console.log(name)
    return (
        <View style={{ borderColor: "#FFCF00", borderWidth: 2, borderRadius: 10, alignItems: "center", padding: 7, shadowColor: "#F4AFAB", shadowRadius: 1, marginRight:40 }}>
            <Image source={{ uri: item.link }} style={{ height: 140, width: 140 }} />
            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "500" }}>{name[0]}</Text>
            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "500" }}>{name[1]}</Text>

        </View>
    )
}

export default StarHormoneCard

const styles = StyleSheet.create({})