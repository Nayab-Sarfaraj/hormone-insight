import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const YogaCard = ({ item }) => {
    return (
        <View style={{ width: 170, height: 170 }}>
            <Image source={{ uri: item.link }} style={{
                flex: 1, borderRadius: 15, overflow: "hidden"
            }}>
            </Image>

            <View style={{
                position: 'absolute',

                width: '100%',
                // flexDirection: "row",
                // justifyContent: "space-between",
                paddingHorizontal: 7,
                paddingVertical: 4,
                // alignItems: "center",
                bottom: 10,
                justifyContent: "flex-end",
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                gap: 5
            }} >
                <Text style={{ fontSize: 15, fontWeight: "500", color: "#000000" }}>
                    {item.title}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
                        <Text>
                            {item.time}
                        </Text>

                        <MaterialCommunityIcons name="clock-time-four-outline" size={24} color="black" />
                    </View>
                    <Text>
                        {item.calories}kcl
                    </Text>
                </View>

            </View>
        </View >
    )
}

export default YogaCard

const styles = StyleSheet.create({})