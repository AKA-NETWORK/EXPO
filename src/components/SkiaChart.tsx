import { Line, Path, Skia, useComputedValue } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";

const AnimatedChart = ({ data }: { data: number[] }) => {
  const { width, height } = useWindowDimensions();
  const graphHeight = height * 0.4;
  const graphWidth = width - 32;

  const path = useComputedValue(() => {
    const curve = Skia.Path.Make();
    const step = graphWidth / (data.length - 1);
    
    curve.moveTo(0, graphHeight - data[0]);
    data.slice(1).forEach((point, i) => {
      curve.lineTo((i + 1) * step, graphHeight - point);
    });
    
    return curve;
  }, [data]);

  return (
    <Canvas style={{ height: graphHeight, width: graphWidth }}>
      <Path
        path={path}
        style="stroke"
        strokeWidth={4}
        color="#6200EE"
      />
    </Canvas>
  );
};
