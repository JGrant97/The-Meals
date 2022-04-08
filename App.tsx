import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"

//Screens
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawNavigator() {
  return (
    <Drawer.Navigator screenOptions={
      {
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3F2F25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1"
      }}
    >
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <Ionicons name='list' color={color} size={size} />
        )
      }} />
      <Drawer.Screen name='Favourites' component={FavouritesScreen} options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          )
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3F2F25" }
          }
        }>
          <Stack.Screen name='Drawer' component={DrawNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
