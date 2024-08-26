
import * as React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Header from "../../components/customComponent/Header";
import StarHormoneCard from "../../components/customComponent/StarHormoneCard"
import Feather from '@expo/vector-icons/Feather';
import HormoneHeroCard from "../../components/customComponent/HormoneHeroCard"
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
export default function App() {
  const starHormoneList = [{ name: "Estro ,the energiser", link: "https://s3-alpha-sig.figma.com/img/a02d/c914/a91974125ecf132a9df56f059d60eaf7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXQdjVjUNzmO-Tw46nfJm46YQNAKEgxbpa73E5GLOtiPFIvsHOIALJq54Q47wVJc9ziuUhlyH1HX~f50GmNO6opqSTuYM5ULekte4VtXHDVN0-q1Jn0z4Zr3MG96~vC8c4wdyLdVqiXFhMB~7zd~fj7uVxb~hbr9ruICN6OW6q4~~hc7uBHA1Rk2mFxhPjCxJuYKc3kU7SajiKJpLO3GqngUPJjfcn0vU0nw5MZtF8HgdPH1mrJ0mod21q7a9NXWCTIhQZgjTYycqg1z~aZCoQb0Jqa2NXFHmkvLa9-Ovgo-tT3AuPOqy-WUFtY7S89K~YZ738~zuZP~i-R7v11NGg__" },

  {
    name: "Prog,TheProtector",
    link: "https://s3-alpha-sig.figma.com/img/0e41/d8ba/aa8e532e9011a6ee724356b797bc9155?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X6vfCVWyuqlQ3E-xX~LTtwIOHcCJSfoB4G8n3qrxbMcX8vhcKu~gW~zzRh9FZAU-J-h59-REhCh9eeJhpDNbATKD1CHMTaiswxe2xWAVGHdt8IzHT8AZPfr8kV2m8vXbEZDlXkbewBAQTxKI78mgJBzZ9LPxsqOkacL1g-i4C~AC7oIfWfKePPeI5WN6sIqzBujmHYMkGRW4DIcN4MCd5SYRzpUV9uLgBiPQ68JlpVTLOPCW7~0hQtgrjtB1Ger6A9P4r8GIKs3eIKCLI9-dL1aXv~ShfBd831O7QErp63z0A3YFihnR7AmwBStyt~Rxm84szE~Zx9kaoCMTTP5vEA__"
  }
  ]
  const HormoneHeroContainer = ["Caffeine & Alcohol", "Active body", "Monotonous tasks", "Increased Charm", "Sharp mind", "Great mood", "High energy"]

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }} >
        <ScrollView contentContainerStyle={{ marginTop: 50, paddingHorizontal: 15, paddingBottom: 50 }}>
          <Header />
          {/* greent section start */}

          <View>
            <Text style={{ fontSize: 24, fontWeight: "400", color: "#6C515B", marginVertical: 20 }}>Hi, Jessica</Text>
          </View>
          {/* greet section ends */}
          {/* founders greeting secion */}

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#B5F9AF", height: 100, borderRadius: 10, paddingHorizontal: 30, width: "auto", }}>

            <View >
              <Text numberOfLines={10} style={{ color: "#000000", fontVariant: "400", fontSize: 17 }}>Voice note from the founder of Hormone Insight for you</Text>
            </View>
            <View style={{ marginHorizontal: 10, gap: 3 }}>
              <Feather name="play" size={24} color="#000000" style={{ fontWeight: "400" }} />
              <Text style={{ fontWeight: "300", color: "#000000" }}>Play</Text>
            </View>
            <View style={{ gap: 3 }}>
              <Feather name="eye" size={24} color="#000000" style={{ fontWeight: "400" }} />
              <Text style={{ fontWeight: "300", color: "#000000" }}>Read</Text>
            </View>

          </View>


          {/* founders greeeting section ednds here */}

          <View style={{ alignSelf: "center", marginTop: 10, marginBottom: 30 }}><Text style={{ textDecorationLine: "underline" }}>Want to listen to your own voice everyday? Try now</Text></View>

          {/* cycle section starts */}
          <View>
            <View>
              <Text style={{
                alignSelf: "center", fontSize: 22, color: "#49454F", fontWeight: "500"
              }}>
                Your cycle, your way.Embrace it!
              </Text>
            </View>
            {/* cycle card */}
            <View style={{ borderColor: "#FFB6D2", borderWidth: 2, borderRadius: 10, alignItems: "center", gap: 7, paddingTop: 20, paddingBottom: 10, marginTop: 10 }}  >
              <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>You’re in the Follicular Phase

              </Text>
              <Text style={{ color: "#000000", fontWeight: "500", fontSize: 18 }}>
                Inner Spring Season!
              </Text>
              <Text style={{ color: "#000000", fontWeight: "600", fontSize: 24 }}>
                Day 8</Text>
              <Text style={{ color: "#000000", fontWeight: "400", fontSize: 16 }}>Next Period in 20 days </Text>
            </View>

          </View>

          {/* cycle section ends */}

          {/* start hormones section starts */}
          <View>
            <View>
              <Text style={{
                fontSize: 22, color: "#000000", fontWeight: "500", marginVertical: 15
              }}>
                Star Hormones for Today        </Text>
            </View>
            <FlatList data={starHormoneList} renderItem={({ item }) => <StarHormoneCard item={item} />} keyExtractor={(item, index) => index.toString()}
              // horizontal={true}
              numColumns={2}
              style={{ alignSelf: "center", }}

            />


          </View>



          {/* start hormones ends */}

          {/* hormone heros and hurdles starts */}
          <View>
            <View>
              <Text style={{
                fontSize: 22, color: "#000000", fontWeight: "500", marginVertical: 15
              }}>
                Hormone Heroes & Hurdles     </Text>
            </View>
            <FlatList data={HormoneHeroContainer} keyExtractor={(item, index) => index.toString()
            } renderItem={({ item }) => <HormoneHeroCard item={item} />} numColumns={2} />



          </View>


          {/* hormone heros and hurdle ends */}


          {/* daily key action section */}
          <View>
            <View>
              <Text style={{
                fontSize: 22, color: "#000000", fontWeight: "500", marginVertical: 15
              }}>
                Today’s Key Actions   </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 20 }}>



              <View style={{ padding: 15, backgroundColor: "#B5F9AF", borderRadius: 10, alignItems: "center" }} >
                <Text style={{ color: "#000000", fontWeight: "400", fontSize: 17, }} numberOfLines={10}>Upload My Blood report</Text>
                <FontAwesome5 name="notes-medical" size={45} color="#000000" />
                <View>

                </View>


              </View>
              <View style={{ padding: 15, backgroundColor: "#B5F9AF", borderRadius: 10, alignItems: "center" }} >
                <Text style={{ fontWeight: "400", color: "#000000", fontSize: 15 }}>Log my observations</Text>
                <Feather name="edit" size={45} color="#000000" />
              </View>
              <View style={{ padding: 15, backgroundColor: "#B5F9AF", borderRadius: 10, alignItems: "center" }} >
                <Text style={{ fontWeight: "400", color: "#000000", fontSize: 15 }}>Sync my Partner</Text>
                <MaterialIcons name="loop" size={45} color="#000000k" />
              </View>
            </View>


          </View>


          {/* daily key action section */}
        </ScrollView >



      </SafeAreaView>


    </GestureHandlerRootView>
  );
}