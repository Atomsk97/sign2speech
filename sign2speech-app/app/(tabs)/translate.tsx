import AvatarFrame from "@/components/AvatarFrame";
import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function TranslateScreen() {
  return (
    <View className="bg-secondary h-full px-4 py-16 items-center justify-center">
      <View className="bg-primary/50 w-full mx-4 my-2 items-center justify-center rounded-2xl">
        <AvatarFrame />
      </View>
      <View className="flex-row items-center justify-between mt-4 gap-x-2">
        <View className="flex-row items-center justify-between bg-primary/50 rounded-full px-4 py-2 w-5/6 gap-x-2">
          <TextInput
            className="text-xl"
            placeholderTextColor={"#DBE9EE"}
            placeholder="Escribe para traducir..."
          ></TextInput>
          <View className="bg-primary/80 rounded-full p-4">
            <Feather name="camera" size={24} color={"white"} />
          </View>
        </View>
        <View className="self-center bg-primary/80 rounded-full p-4">
          <Feather name="mic" size={24} color={"white"} />
        </View>
      </View>
    </View>
  );
}
