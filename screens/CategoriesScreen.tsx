import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";
import { ICategory } from "../models/ICategory"

function renderCategoryItem(itemData: ICategory) {
    return <CategoryGridTile {...itemData}/>;
}

function CategoriesScreen() {
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