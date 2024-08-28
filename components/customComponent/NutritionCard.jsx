import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';


const NutritionCard = ({ item }) => {
    return (
        <View style={{ width: 170, height: 170 }}>
            <Image source={{ uri: item.link }} style={{
                flex: 1, borderRadius:15, overflow: "hidden"
            }}>
            </Image>

            <LinearGradient colors={["#F3EFEE99", "#F2B7C499"]} style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 4,
                paddingVertical: 4,
                alignItems: "center",
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
            }} >
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#000000" }}>
                    {item.title}
                </Text>
                <AntDesign name="arrowright" size={24} color="#000000" style={{ fontWeight: "500" }} />
            </LinearGradient>
        </View >
    )
}

export default NutritionCard

const styles = StyleSheet.create({})