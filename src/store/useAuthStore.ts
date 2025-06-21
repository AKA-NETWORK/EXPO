import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: null | { email: string; name: string };
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (email, password) => {
        const { user } = await auth().signInWithEmailAndPassword(email, password);
        const token = await user.getIdToken();
        set({ user: { email: user.email!, name: user.displayName || '' }, token });
      },
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => AsyncStorage,
    }
  )
);
