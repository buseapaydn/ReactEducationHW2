import { View, Text } from 'react-native';
import { colors } from '../constants/colors';

const Badge = ({ badgeTitle, badgeType,fontSize }) => {

    return (
        <View
            style={{
                backgroundColor: badgeType === 'primary' ? colors.BLUE : badgeType === 'danger' ? colors.RED : badgeType === 'gold' ? colors.GOLD : colors.PINK,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
                borderRadius: 10,
            }}>
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: fontSize
                }}>{badgeTitle}
            </Text>
        </View>
    )
}

export default Badge