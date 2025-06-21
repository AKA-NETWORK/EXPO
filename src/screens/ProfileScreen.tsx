import { View, Text } from 'react-native';
import { Button } from '../components/common/Button';

export const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Edit Profile" onPress={() => console.log('Pressed!')} />
    </View>
  );
};
