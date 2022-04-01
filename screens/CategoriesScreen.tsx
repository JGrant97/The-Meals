import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";
import { ICategory } from "../models/ICategory"

function CategoriesScreen({navigation}:any) {
    function renderCategoryItem(itemData: ICategory) {
        function pressHandler() {
            navigation.navigate("MealsOverview", itemData);
        }
    
        return <CategoryGridTile category={itemData} onPress={pressHandler}/>;
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item: ICategory) => item.id}
            renderItem={({item}) => {return renderCategoryItem(item)}} 
            numColumns={2}
            />
    );
}

export default CategoriesScreen;