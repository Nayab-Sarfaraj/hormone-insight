import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MyPlanCard from "../../../components/customComponent/MyPlanCard"
const MyPlan = () => {


    const myPlanList = [{ title: "Nutrition Plan", link: 'https://s3-alpha-sig.figma.com/img/cfa9/0679/cacf9deecaa2744dbb1c54322daab166?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIYvZXJ29TZ~ClKN-5HnOytMUSUzdNFgVsY2p3cYmh-fHk8lUBs~hgq8mn8PVvATXnS8TuZpaodPmERFZcdOtjm0aolXCNnzHSRWXyayNtlg7lKeI2voYqSG6kl-L1S0Msy~DabVWjPNQY4dg9X0L1dfVPj~PLTcusavYudlJKlyXtefxA6fjoWr08zmTdMa4sIapl7dYjcc5xqzQAlB46n3tlQlu8H0TKRCOnvmnU~y4ithaGX0MYfSDh6z1yj0VRHbLwimpP7Q6SAQ36iT7v4sQD5IrvMwPM3doRPRIHkdfZKBqKmIAJgp9t3DJkUslkq8bE515cEnKnKDKPHTUw__', uri:"/NutritionScreen" }, { title: "Workout Plan", link: "https://s3-alpha-sig.figma.com/img/b3e9/55d9/aad37b7200406acbc7c39ed4ae38dca7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cch5pmPQqOYW-U5BNIvJ31GwSnYNSadQti3YWLMKatxLPULaFS1dG~~5wS7vNcJ7f7ESSUmXDC5mVwXnAxIjL6Wa8gRxNAUJpoe8CUN~9Mt7wCQLbh0XvC6~U-5pK5uE0kqB2FAAxRvg0fMWmeRY-D7CFTA-8-pBHW2viw~HKk4HFpr072xC1egEx-c6NJZT9FVWzzaTjJHe-kmJdk-1d8EKqu7h-sJQK7grIFmzJiZnrTbDdYI7yx0USsoT153pR4JY8cXV~UHyZ6nQJ8jYy5acx~8Xf0lvECI0bSfAmccbnaUfPcjfUqI6RQnwzJldvW-aviuLHk8YSYimeHQE~A__" }, { title: "Me Time Plan", link: "https://s3-alpha-sig.figma.com/img/8454/5431/2468e4ece5ce6e842b7579dc3e9951c7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXsSiZN-5~ddAskDV~LbpjmohPznQHIqxjVWQ83RJqIxsCo8~~FAmlI~i-ST-XT98WkgX-iR6DbRGsFh66UKP4CqI6RlMRYCutwujHdSiW6zmtCjA6mReyWLMJ152mtwhJ26Dt8m~HWiJmy5rjzI7~FmbCpBOaBQAbY4LqqbjPKfJe0dxR7o1LIWo0taP-6NwSIIRdiOPzyHE8FVB5In8T8NKh5TW82Q~H4~oiEbTaIUeMz~mCagE5yQUiakBppTAkXNKT44~Sw0tBJxdGXjgpKDX0D9N1Y1PjvR3C7CMCAS71G70eKSPg-ecLdVOy6E1s~W49pGKLwcIggw-uxaXA__" }]
    return (
        <View style={{ marginTop: 50, paddingHorizontal: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 20, justifyContent: "center" }}>

                <Ionicons name="arrow-back-outline" size={24} color="black" style={{ alignSelf: "flex-start", width: "50%" }} />
                <Text style={{ fontSize: 22, fontWeight: "500", width: "50%", alignSelf: 'center' }}>My Plan</Text>

            </View>
        
            <View style={{ gap: 20 }}>
                {
                    myPlanList.map((item, index) => <MyPlanCard item={item} key={index} />)
                }


            </View>




        </View >
    )
}

export default MyPlan

const styles = StyleSheet.create({})