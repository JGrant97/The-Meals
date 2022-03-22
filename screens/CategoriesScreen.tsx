import { FlatList, View } from "react-native";
import CategoryGridTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";
import { ICategory } from "../models/ICategory"

function renderCategoryItem(itemData: any) {
    return <CategoryGridTile title={itemData.item.title} colour={itemData.item.color}/>;
}

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item: ICategory) => item.id}
            renderItem={renderCategoryItem} />
    );
}

export default CategoriesScreen;