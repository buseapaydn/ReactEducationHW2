import { FlatList, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import ProductBox from "../components/ProductBox";
import { colors } from '../constants/colors';

const HomeScreen = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.log(error))
    }

    return (
        <View>
            <CustomButton
                onPress={() => getAllProducts()}
                borderRadius={20} buttonColor='#48709c'
                buttonTitle='Get Product' />
            <FlatList data={products}
                renderItem={({ item }) => <ProductBox onPress={() => navigation.navigate('DetailScreen', { productId: item })} 
                productInfo={item} 
                />} />
        </View>

    );
};

export default HomeScreen