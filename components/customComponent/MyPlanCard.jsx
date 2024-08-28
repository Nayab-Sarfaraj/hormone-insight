import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const MyPlanCard = ({ item }) => {
    const router = useRouter()
    return (
        <TouchableOpacity style={{ backgroundColor: "#B5F9AF", height: 150, borderRadius: 10, flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }} onPress={() => router.push("MyPlan/NutritionScreen")}>
            <Image source={{ uri: item.link }} style={{ width: 120, height: 120, borderRadius: 10, marginRight: 15 }} />
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000000" }}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default MyPlanCard

const styles = StyleSheet.create({})