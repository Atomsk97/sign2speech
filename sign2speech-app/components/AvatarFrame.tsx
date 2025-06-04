import { Image, View } from "react-native";

export default function AvatarFrame() {
  // This component is a placeholder for the 3D avatar frame.
  return (
    <View>
      <Image
        source={require("@/assets/images/3DAvatar_placeholder_1.png")}
        style={{ width: 250, height: 518, alignSelf: "center" }}
      />
    </View>
  );
}

//76x133
