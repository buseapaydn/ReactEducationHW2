import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Badge from './Badge';

const ProductBox = ({ productInfo, onPress }) => {

    return (
        <TouchableOpacity
            style={styles.container} onPress={onPress}>
            <View
                style={styles.leftSide}>
                <Image
                    style={styles.productImage}
                    source={{ uri: productInfo?.image }} />
                <View
                    style={styles.infobar}>
                    <Text
                        style={styles.productTitle}>
                        {productInfo?.title}
                    </Text>
                    <View
                        style={{ flexDirection: 'row' }}>
                        <Badge
                            fontSize={9}
                            badgeTitle={productInfo?.category}
                            badgeType={productInfo?.category === 'electronics'
                                ? 'primary' : productInfo?.category === 'jewelery'
                                    ? 'gold' : productInfo?.category === "women's clothing"
                                        ? 'girl' : 'danger'} />
                    </View>
                    <Text
                        style={styles.descriptionText}>
                        {productInfo?.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductBox

const styles = StyleSheet.create({
    container: {
        margin: 3,
        padding: 10,
        backgroundColor: 'white'
    },
    leftSide: {
        flexDirection: 'row',
        gap: 6
    },
    productImage: {
        width: 90,
        height: 90,
        resizeMode: 'cover'
    },
    productTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        width: 300
    },
    infobar: {
        gap: 5
    },
    descriptionText: {
        fontSize: 10,
        width: 275
    }
})