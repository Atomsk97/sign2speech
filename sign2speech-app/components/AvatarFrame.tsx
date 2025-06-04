import { Image, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function AvatarFrame() {
  return (
    <View className="h-full w-full p-2 flex-col overflow-hidden">
      <View className="flex-row items-center justify-between">
        <Text
          className="text-primary font-nerko text-2xl"
          style={{
            left: "50%",
            transform: [{ translateX: "-50%" }],
          }}
        >
          Hola
        </Text>
        <View className="bg-primary/80 rounded-full p-4 me-2">
          <SimpleLineIcons name="notebook" size={24} color={"white"} />
        </View>
      </View>
      <Image
        source={require("@/assets/images/3DAvatar_placeholder_1.png")}
        style={{ width: 264, height: 534, alignSelf: "center" }}
      />
    </View>
  );
}

//76x133
