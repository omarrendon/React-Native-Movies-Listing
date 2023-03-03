import {ActivityIndicator, Text, StyleSheet, View} from 'react-native';
import {colors} from '../theme/appTheme';

interface Props {
  isLoading: boolean;
  sizeLoader?: size;
}
enum size {
  'small',
  'large',
}

export const LoadingIndicator = ({isLoading, sizeLoader}: Props) => {
  return (
    <View>
      <Text style={styles.loadingText}>Loading ...</Text>
      <ActivityIndicator
        color={colors.primary}
        size={sizeLoader ? sizeLoader : 'large'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});
