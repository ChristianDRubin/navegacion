import BreadItem from '../components/BreadItem';
import { FlatList } from 'react-native';
import {PRODUCTS} from '../constants/data/products';
import React from 'react'

export default function CategoryBreadScreen({ navigation, route }) {
    const products = PRODUCTS.filter(prod => prod.categoryId === route.params.categoryID);

    const handleSelectedProduct = (item) =>{
        navigation.navigate('Detail', {
            productID:item.id,
            name: item.title,
        });
    };

    const renderItemProduct = ({ item }) =>{
        <BreadItem item={item} onSelected = {handleSelectedProduct}/>
    };
    return (
        <FlatList
            data={products}
            keyExtractor={item =>item.id}
            renderItem={renderItemProduct}
        />
    );
};
