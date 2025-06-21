import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootState } from '../store/store';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator>
      {token ? (
        // Authenticated screens
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      ) : (
        // Auth screens
        <>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          {/* Add RegisterScreen here if needed */}
        </>
      )}
    </Stack.Navigator>
  );
}
