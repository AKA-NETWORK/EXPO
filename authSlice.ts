// Replace mock API with Firebase calls
const authSlice = createSlice({
  // ... (existing initialState and reducers)
  extraReducers: (builder) => {
    builder.addCase(loginWithFirebase.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginWithFirebase.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
    });
    // ... (handle other cases)
  },
});

// Firebase async thunk
export const loginWithFirebase = createAsyncThunk(
  'auth/firebaseLogin',
  async ({ email, password }: { email: string; password: string }) => {
    const { user } = await auth().signInWithEmailAndPassword(email, password);
    const token = await user.getIdToken();
    return { user: { email: user.email!, name: user.displayName || '' }, token };
  }
);
