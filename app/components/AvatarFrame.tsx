import { Image, View } from "react-native";

const images: { [key: string]: any } = {
  "1": require("@/assets/images/3DAvatar_placeholder_1.png"),
  "2": require("@/assets/images/3DAvatar_placeholder_2.png"),
  "3": require("@/assets/images/3DAvatar_placeholder_3.png"),
};

export default function AvatarFrame(props: {
  width?: number;
  height?: number;
  option?: string;
}) {
  //{ width: 250, height: 518 }
  // This component is a placeholder for the 3D avatar frame.
  const { width = 250, height = 518 } = props;
  const imageKey = props.option || "1";
  const imageSource = images[imageKey];
  return (
    <View>
      <Image
        source={imageSource}
        style={{
          width: width,
          height: height,
          alignSelf: "center",
        }}
      />
    </View>
  );
}
