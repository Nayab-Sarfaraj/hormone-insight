import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const NutritionScreen = () => {
  const carsolList = ["Avacado", "Grape", "Paneer", "Potato"]
  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 15, backgroundColor: "white", flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 20, justifyContent: "center" }}>

        <Ionicons name="arrow-back-outline" size={24} color="black" style={{ alignSelf: "flex-start", width: "50%" }} />
        <Text style={{ fontSize: 22, fontWeight: "500", width: "50%", alignSelf: 'center' }}>My Nutrition Plan</Text>

      </View>
      <View>
        <Text style={{ color: "#000000", fontWeight: "500", fontSize: 20 }}>Today’s recipes for you</Text>
        <Text style={{ fontWeight: "400", color: "#49454F" }}>
          Your plan supports estrogen production and reduces PCOS symptoms like acne and bloating during the follicular phase.
        </Text>
      </View>

      <View style={{
        flexDirection: "row", justifyContent: 'flex-start', gap: 20, marginVertical: 15, width: "100%"
      }}>

        <TouchableOpacity style={{
          flexDirection: "row", alignItems: "center", borderWidth: 1
          , paddingHorizontal: 5, paddingVertical: 5, gap: 5, borderRadius: 5

        }}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            Plan my Week
          </Text>
          <Ionicons name="pencil-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: "row", alignItems: "center", borderWidth: 1, paddingHorizontal: 5, paddingVertical: 5, gap: 5, borderRadius: 5

        }}>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            Favorites
          </Text>

          <FontAwesome name="star-o" size={20} color="black" />
        </TouchableOpacity>
      </View>


      {/* search bar */}


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          padding: 10,
          backgroundColor: '#FFFFFF',
          borderRadius: 25,
          borderWidth: 0.5,
          gap: 10,
          width: "100%",
          backgroundColor: "#ECE6F0"

        }}
      >
        <TouchableOpacity >

          <Ionicons name="options-outline" size={25} color="#49454F" />
        </TouchableOpacity>

        <TextInput
          placeholder="Search for clother ..."
          style={{ flex: 1, fontSize: 18, color: "#49454F" }}
        />

        <Feather name={'search'} size={25} style={{ marginHorizontal: 10, color: '#49454F' }} />

      </View>



      {/* search bar ends */}


      {/* recipe carosol */}
      <ScrollView horizontal={true} style={{ marginVertical: 20, }}>

        {
          carsolList.map((item, idx) => (<View style={{
            shadowColor: '#000',       // Shadow color
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5, width: 120, height: 150, marginRight: 19, backgroundColor: 'white',
            borderRadius: 10,
            borderRadius: 20
            // alignItems:"center"

          }}>
            <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/775f/29f8/1cefe5765b9d8c7e06783905fe0b2e1b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jP2piYH55uVauy4CwyiiE~LegvKleJATFem8FCas3~GxX0xgxu67dY84VLD8qp92Gt00SV3esuOZR2d-evsFAtpQ1Jv6TjPdZtG13QcUGQLxUfCRx~ajNxMMC2Yp3De~v6uCscrHzsBsbyqi0MMTfX~PKme7fKt~g8zzqcIdszqMyVgEOMQBIX8lcU8iVYoqv9c9XIW4UelTGhDPzgXGLMmSzODnF6g7basAgKKAHK2KubIHbK8EN73~5HIXJPbU4dBjHyNaQuqIHUSlQ2PtdNW4bY9l9S2VfuqZzIxT0FjTJZzHWzEZrEQhGfr7TBBweU-~MFewPYuh8qgBQfROGg__" }} style={{ flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></Image>

            <Text style={{ alignSelf: "center", paddingVertical: 8 }}>{item}</Text>
          </View>))
        }

      </ScrollView>

      {/* recipe carosol */}
    </View>
  )
}

export default NutritionScreen

const styles = StyleSheet.create({})