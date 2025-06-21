import { Switch, View, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Appearance</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: colors.text }}>Dark Mode</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={colors.primary}
        />
      </View>
    </View>
  );
};
