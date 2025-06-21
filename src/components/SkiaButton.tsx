import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Canvas, Fill, vec, RoundedRect, Shadow, Paint } from '@shopify/react-native-skia';
import { useDerivedValue, withSpring } from 'react-native-reanimated';

const SkiaButton = ({ onPress }: { onPress: () => void }) => {
  const pressed = useSharedValue(false);
  
  const scale = useDerivedValue(() => 
    withSpring(pressed.value ? 0.95 : 1, { damping: 10 })
  );

  return (
    <TouchableOpacity 
      onPressIn={() => (pressed.value = true)}
      onPressOut={() => (pressed.value = false)}
      onPress={onPress}
    >
      <Canvas style={{ width: 200, height: 60 }}>
        <RoundedRect 
          rect={{ x: 0, y: 0, width: 200, height: 60, r: 12 }}
          color="#6200EE"
          transform={[{ scale: scale }]}
          origin={vec(100, 30)}
        >
          <Shadow dx={2} dy={2} blur={4} color="rgba(0,0,0,0.3)" />
        </RoundedRect>
      </Canvas>
    </TouchableOpacity>
  );
};
