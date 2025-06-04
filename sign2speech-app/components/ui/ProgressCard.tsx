import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProgressCard() {
  return (
    <View className="bg-white rounded-2xl p-4 shadow-md w-full">
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <Feather name="book-open" size={24} color={"#7E22CE"} />
          <Text className="text-primary font-nerko text-2xl">Tu Progreso</Text>
        </View>
        <View className="bg-[#7E22CE] w-12 rounded-3xl items-center justify-center">
          <Text className="text-white">80%</Text>
        </View>
      </View>
      <View className="flex-row mb-2">
        <Text className="text-primary/65">Lección actual: Saludos</Text>
      </View>
      <Text className="text-primary/70 font-bold self-end">8/10</Text>
      <View className="mt-4 h-2 bg-gray-200 rounded-full">
        <View
          className="bg-[#7E22CE] h-full rounded-full"
          style={{ width: "80%" }}
        />
      </View>
    </View>
  );
}
