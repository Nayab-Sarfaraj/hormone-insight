import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HormoneHeroCard = ({ item }) => {
    // console.log(item)
    const color = ["#FFB6D2", "#B5F9AF"]
    const idx = Math.floor((Math.random() * 2))
    // console.log(idx)
    return (
        <View style={{
            backgroundColor: color[idx], paddingHorizontal: 10,marginRight:10,marginVertical:6, paddingVertical: 3, borderRadius: 10
        }}>
            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "400" }}>{item}</Text>

        </View>
    )

}

export default HormoneHeroCard

const styles = StyleSheet.create({})