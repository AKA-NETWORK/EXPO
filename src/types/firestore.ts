import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

type UserProfile = {
  displayName: string;
  avatarUrl?: string;
  lastActive: FirebaseFirestoreTypes.Timestamp;
  premium: boolean;
};

export type { UserProfile };
