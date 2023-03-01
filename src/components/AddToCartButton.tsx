import {colors} from '../theme/appTheme';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function AddToCartButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonLocation}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Cart' as never)}>
      <View style={styles.button}>
        <Icon
          name="cart-outline"
          style={styles.buttonText}
          size={40}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#4AB6D0',
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonLocation: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});
