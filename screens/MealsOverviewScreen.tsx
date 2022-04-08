import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList} from "react-native"
import { MEALS } from "../data/dummy-data";
import { IMeal } from "../models/IMeal"
import { ICategory } from "../models/ICategory"
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route, navigation}:any){
    const category:ICategory = route.params;

    const displayedMeals = MEALS.filter((meal:IMeal) => {
        return meal.categoryIds.indexOf(category.id) >= 0;
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: category.title
        });
    },[category, navigation]);

    function renderMealItem(itemData: IMeal){
        return (
            <MealItem {...itemData}/>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} 
            keyExtractor={(meal:IMeal) => meal.id}  
            renderItem={({item}) => {return renderMealItem(item)}} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    }
});
