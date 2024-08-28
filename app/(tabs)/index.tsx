
import * as React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../components/customComponent/Header";
import StarHormoneCard from "../../components/customComponent/StarHormoneCard"
import Feather from '@expo/vector-icons/Feather';
import HormoneHeroCard from "../../components/customComponent/HormoneHeroCard"
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
import NutritionCard from "../../components/customComponent/NutritionCard"
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import YogaCard from "../../components/customComponent/YogaCard"
export default function App() {
  const starHormoneList = [{ name: "Estro ,the energiser", link: "https://s3-alpha-sig.figma.com/img/a02d/c914/a91974125ecf132a9df56f059d60eaf7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXQdjVjUNzmO-Tw46nfJm46YQNAKEgxbpa73E5GLOtiPFIvsHOIALJq54Q47wVJc9ziuUhlyH1HX~f50GmNO6opqSTuYM5ULekte4VtXHDVN0-q1Jn0z4Zr3MG96~vC8c4wdyLdVqiXFhMB~7zd~fj7uVxb~hbr9ruICN6OW6q4~~hc7uBHA1Rk2mFxhPjCxJuYKc3kU7SajiKJpLO3GqngUPJjfcn0vU0nw5MZtF8HgdPH1mrJ0mod21q7a9NXWCTIhQZgjTYycqg1z~aZCoQb0Jqa2NXFHmkvLa9-Ovgo-tT3AuPOqy-WUFtY7S89K~YZ738~zuZP~i-R7v11NGg__" },

  {
    name: "Prog,TheProtector",
    link: "https://s3-alpha-sig.figma.com/img/0e41/d8ba/aa8e532e9011a6ee724356b797bc9155?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X6vfCVWyuqlQ3E-xX~LTtwIOHcCJSfoB4G8n3qrxbMcX8vhcKu~gW~zzRh9FZAU-J-h59-REhCh9eeJhpDNbATKD1CHMTaiswxe2xWAVGHdt8IzHT8AZPfr8kV2m8vXbEZDlXkbewBAQTxKI78mgJBzZ9LPxsqOkacL1g-i4C~AC7oIfWfKePPeI5WN6sIqzBujmHYMkGRW4DIcN4MCd5SYRzpUV9uLgBiPQ68JlpVTLOPCW7~0hQtgrjtB1Ger6A9P4r8GIKs3eIKCLI9-dL1aXv~ShfBd831O7QErp63z0A3YFihnR7AmwBStyt~Rxm84szE~Zx9kaoCMTTP5vEA__"
  }
  ]
  const HormoneHeroContainer = ["Caffeine & Alcohol", "Active body", "Monotonous tasks", "Increased Charm", "Sharp mind", "Great mood", "High energy"]
  const todayNutritionPlanList = [{ title: "Star Ingredients", link: "https://s3-alpha-sig.figma.com/img/583b/34b5/25690c56030536503cc5638e839628aa?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdslZ5W6GBNEO9yXLhaU9h6zOfwU~32b-I0xXkDZFc1-BhtHub8vh~uIeefS9NIcblge5uxlwpjzoD~7MuY9RItEUscnEIwxHzjFOxl58ABcfLwOSkBmdMXAe4RpXkBzmlEOEzpZ00nnekOHtL1~MTBsK~R-j7~aKbUn70y1JbAeiysqz0vhVkfiQlbuN3Biayo~zkqFr96Ijo-mcsd8s6rG3Jc4zOWOfy-5DakgKT0ZGNyV4c0n1HIDD2fkZEsB3bXE1Uy5xDlSvNlZDEYnsMzOJnDqPW-E9h11KMPYk-4DQEpvpfF8pvkkCVm9cEQzCFuVb4vYnxTgnVRyVsxyqg__" }, { title: "Recipes", link: "https://s3-alpha-sig.figma.com/img/aa3f/e086/dc6b10bde18095d762d6776e56a3ee19?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofQQpcdoUWXW5rMryqodiRBk~1sUPQHwHXW86W8xq4XLa0vtT2Zgd6ocEEdph4lmnI3gqbKjU2lRjNRNWwTpPoyMJIne-lt57ii0FtDaZOd2NA9e3Yog155v8lQoPZHMJEyLMXOx0TXP6B2WryPhbZanQ9UIIetplIneXfoEgtxubsS8dbnGM78RiMRYk9BsFOe4EL6UCLQi~cXN1xMmYpZ6WYlQFErQpKXOqnh~II~y1ZwGLGMXR1jdNiPG5vCsi9bPNAUiFwsltgaXDAmZRwlJTAn-GcgSzzAvHO8BHvmxDaNGeqfwLEOeeANm-r30BA-53lIBrydHNpmO-hG1FQ__" }]
  const meTimeActivityList = [{ title: "Paint your emotions", link: "https://s3-alpha-sig.figma.com/img/1d21/a5c1/2e0c1c12f7e9851224a3ba64b0ad7659?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrMhTI5r9wVDB4LEAgylVsIfZgiKPn0gDzw64MIDK9P39fRQGd3m9esRi5sczVKy0HlA4q4ncc~3VzPrPrtzIRT--jR3sS0L2eydaUolZIE6Obkq~tgmCTlUWCEHxca2YOFSQE5cqb6YcTONiwHmjB1nPg3hxRfeHAJEbjuHkvMtdxtrc-mefkIwqrK1nfU71G-oVP5eyUL7-eLtO2DJqUJNDWcNNNZtjN03PKiTklNeSqYIQQpKx1Oi5M-9kAhSFrJLeCRaaVsuIfKZQ~AwbLpdSjOq5IWCbonQl3DbMFZLllp3bjaAdrlRiXPcNXyiI-Up~ZNe-GVmUndxIkMYww__" }, { title: "Grow some plants", link: 'https://s3-alpha-sig.figma.com/img/ee9e/b196/3c0359b336c0a175ad435c8028338241?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UA4uJ6VNVtEeXD91~IC-N3d2GLkUK6F681B-Do0O3~XGk9xHpPPJ6JezSpIX0ltXhyodVV0ILchA3-YEQo1boiSLP~8TsudeY8R0giz99nPhG8qjjy8Emg5yPjWJeyqGM1g~DKw5ffsueQpjOvYT9mI9Vq0KOQ1DabEfPM7szcAfc8ksTeDUm4441BUKo3dnx3NBl2-beBBuMLdkOVeKWkK-iNcijusWmusU8EVIChGpJ4bznGjVQwz1tUQPIBDEUpsqX43D~Vt6WOKkWnwRExNAoO02gGyYLVsGffxrQaTC0g6H8EeiGVteqKAlAwrjDS2dZbebL~m8Z37JJu3Wlg__' }]

  const workoutList = [{ title: 'Yoga', calories: "234", time: "25", link: "https://th.bing.com/th/id/OIP.ZPwWfMT9G_aiAaJIFeiiWAHaIV?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }, { title: "Workout", calories: 400, time: 30, link: 'https://th.bing.com/th/id/OIP.KHcR9cgp3jEqGzBFgcIgHgHaE7?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }]

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

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#B5F9AF", height: 100, borderRadius: 10, paddingHorizontal: 50, width: "auto", }}>

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



              <View style={{ padding: 10, backgroundColor: "#B5F9AF", borderRadius: 10, alignItems: "center", width: 110 }} >
                <Text style={{
                  color: "#000000", fontWeight: "400", fontSize: 14, marginBottom: 5
                }} numberOfLines={10}>Upload My Blood report</Text>
                <FontAwesome5 name="notes-medical" size={30} color="#000000" />
                <View>

                </View>


              </View>
              <View style={{ padding: 15, backgroundColor: "#B5F9AF", borderRadius: 10, alignItems: "center", width: 110 }} >
                <Text style={{
                  fontWeight: "400", color: "#000000", fontSize: 14
                }}>Log my observations</Text>
                <Feather name="edit" size={30} color="#000000" />
              </View>
              <View style={{ padding: 15, backgroundColor: "#B5F9AF", borderRadius: 10, alignItems: "center", width: 110 }} >
                <Text style={{ fontWeight: "400", color: "#000000", fontSize: 14 }}>Sync my Partner</Text>
                <MaterialIcons name="loop" size={30} color="#000000k" />
              </View>
            </View>


          </View>


          {/* daily key action section */}

          <View>
            <Text style={{
              fontSize: 22, color: "#000000", fontWeight: "500", marginTop: 15, marginBottom: 4
            }}>
              How can I care for me body? </Text>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>We’ve got a personalized plan for you today!</Text>
          </View>


          {/* Nutrition plan section stats */}

          <View>
            <View>
              <Text style={{
                fontSize: 22, color: "#000000", fontWeight: "500", marginVertical: 15
              }}>
                Today’s Nutrition Plan </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              {
                todayNutritionPlanList.map((item, idx) => (<NutritionCard item={item} key={idx} />))
              }
            </View>

          </View>

          {/* nutrition plan section ends */}

          <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "#FFCF00", marginTop: 20, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 }}>

            <Text style={{ color: "#000000", fontSize: 15 }}> Show the week's plan</Text>
          </TouchableOpacity>


          {/* workout section */}

          <View >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "center" }}>


                <View>
                  <Text style={{
                    fontSize: 22, color: "#000000", fontWeight: "500", marginTop: 15, marginBottom: 4
                  }}>
                    Today’s Workout Plan</Text>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
                  <Text>Show all</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>

              </View>
              <View><Text style={{ fontSize: 14, fontWeight: "400" }}>Workout with your cycle</Text></View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
              {
                workoutList.map((item, idx) => (<YogaCard item={item} key={idx} />))
              }
            </View>



          </View>


          {/* workout section */}


          {/* me time activity section starts */}

          <View>

            <View>
              <Text style={{
                fontSize: 22, color: "#000000", fontWeight: "500", marginVertical: 15,
              }}>
                Today’s Me time activities</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              {
                meTimeActivityList.map((item, idx) => (<NutritionCard item={item} key={idx} />))
              }
            </View>



          </View>





          {/* me time activity section ends */}

        </ScrollView >



      </SafeAreaView>


    </GestureHandlerRootView>
  );
}