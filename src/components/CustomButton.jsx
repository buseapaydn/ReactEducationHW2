import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const CustomButton = ({ buttonTitle, buttonColor, borderRadius, onPress, fontfamily }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                backgroundColor: buttonColor,
                margin: 10,
                padding: 10,
                borderRadius: borderRadius,
                alignItems: 'center',
                minWidth: 300,
            }}>
            <Text style={{
                fontFamily: fontfamily,
                color: 'white',
                fontSize: 15,
                fontWeight: 700,
                textTransform: 'uppercase'
            }}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton