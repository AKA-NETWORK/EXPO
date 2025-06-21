import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice';
import { RootState } from '../../store/store';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      // Simulate API call
      const response = await fakeAuthAPI(email, password);
      dispatch(loginSuccess({ user: response.user, token: response.token }));
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
    </View>
  );
};

// Mock API function
const fakeAuthAPI = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === 'password') {
        resolve({ user: { email, name: 'Test User' }, token: 'fake-jwt-token' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export default LoginScreen;
