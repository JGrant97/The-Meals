import { View, ScrollView, Text, Image, StyleSheet } from "react-native"
import { IMeal } from "../models/IMeal"
import { useLayoutEffect } from "react";

import MealDetails from "../components/MealDetails"
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }: any) {
    const meal: IMeal = route.params;

    function headerButtonPressHandler(){

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return <IconButton onPress={headerButtonPressHandler} colour={"white"} icon={"star"}/>
            }
        });
    }, [meal, navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
            <View>
                <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} textStyle={styles.detailText} />
            </View>

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={meal.ingredients} />

                    <SubTitle>Steps</SubTitle>
                    <List data={meal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: "80%",
    },
    listOuterContainer: {
        alignItems: "center",
    }
});

