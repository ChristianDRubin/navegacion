import BreadDetail from '../screens/BreadDetailScreen';
import { COLORS } from '../constants/themes/colors';
import Categories from '../screens/CategoriesScreen';
import CategoryBread from '../screens/CategoryBreadScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <NavigationContainer>
   <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: isIOS ? COLORS.backgroundDark : COLORS.backgroundLight,
      },
      headerTintColor: COLORS.text,
      headerTitleStyle: {
        fontFamily: 'Lato-Bold',
      },
      presentation: 'card',
      headerBackTitle: '',
    }}>
   <Stack.Screen
        name="Home"
        component={Categories}
        options={{
          title: 'Mi pan',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Bread"
        component={CategoryBread}
        options={({ route }) => ({
          title:route.params.name,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={BreadDetail}
        options={({ route }) => ({
          title:route.params.name,
        })}
      />
   </Stack.Navigator>
  </NavigationContainer>
);
export default ShopNavigator;