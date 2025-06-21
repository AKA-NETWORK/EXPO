import { ThemeProvider } from './src/contexts/ThemeContext';
// ... (existing imports)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
