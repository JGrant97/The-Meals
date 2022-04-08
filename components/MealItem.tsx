import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import { IMeal } from "../models/IMeal";
import { INav } from "../models/INav";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../components/MealDetails"

function MealItem(Meal: IMeal) {
    const navigation = useNavigation<INav>();

    function selectMealItemHandler(){
        navigation.navigate("MealDetail", Meal);
    };

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: Meal.imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{Meal.title}</Text>
                    </View>
                    <MealDetails duration={Meal.duration} complexity={Meal.complexity} affordability={Meal.affordability}/>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },

});
