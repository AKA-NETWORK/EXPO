import firestore from '@react-native-firebase/firestore';
import { useAuthStore } from '../store/useAuthStore'; // or Redux selector

export const syncUserData = (userId: string) => {
  return firestore()
    .collection('users')
    .doc(userId)
    .onSnapshot((doc) => {
      const userData = doc.data();
      useAuthStore.getState().updateProfile(userData); // Zustand example
      // Or for Redux: dispatch(updateProfile(userData));
    });
};

// Usage in ProfileScreen.tsx:
useEffect(() => {
  const unsubscribe = syncUserData(currentUser.uid);
  return () => unsubscribe();
}, []);
