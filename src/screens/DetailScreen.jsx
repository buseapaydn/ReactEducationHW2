import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import CustomButton from "../components/CustomButton";
import Badge from "../components/Badge";

const DetailScreen = () => {
    const route = useRoute()
    const productId = route.params.productId;
    console.log(productId)
    const [product, getProductInfo] = useState([])

    return (
        <SafeAreaView style={styles.conatainer}>
            <Image style={styles.productImage} source={{ uri: productId?.image }} />
            <Badge
                fontSize={15}
                badgeTitle={productId?.category}
                badgeType={productId?.category === 'electronics'
                    ? 'primary' : productId?.category === 'jewelery'
                        ? 'gold' : productId?.category === "women's clothing"
                            ? 'girl' : 'danger'} />
            <Text style={styles.title} > {productId.title} </Text>

            <Text style={styles.description} >{productId.description}</Text>
            <Text style={styles.title} > Price: ${productId.price}</Text>

            <CustomButton style={styles.button}
                borderRadius={20} buttonColor='#48789c'
                buttonTitle='ADD TO CART' />

        </SafeAreaView>
    );
};

export default DetailScreen

const styles = StyleSheet.create({
    conatainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    productImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginTop:50
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 7
    },
    description: {
        fontSize: 12,
        width: 275
    },
    button: {
        marginTop: 20

    },
})