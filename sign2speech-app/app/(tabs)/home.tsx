import ProgressCard from "@/components/ui/ProgressCard";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="bg-secondary h-full px-4 py-16">
      <View className="flex-row self-center">
        <Text className="text-primary font-nerko text-4xl self-end">
          Bienvenido a
        </Text>
        <Image
          source={require("@/assets/images/3DAvatar.png")}
          style={{ width: 80, height: 100 }}
        />
      </View>
      <Text className="text-primary font-nerko text-4xl self-end me-16 mb-6">
        Sign2Speech
      </Text>

      <ProgressCard />

      <View className="flex-row gap-2 mx-2 my-6">
        <Feather name="triangle" size={28} color="#7E22CE" />
        <Text className="text-primary font-nerko text-2xl">
          Acciones Rápidas
        </Text>
      </View>

      <View className="flex-row gap-2 self-center h-28 mx-2">
        <TouchableOpacity
          className="bg-primary w-1/2 rounded-3xl text-white gap-y-2 items-center justify-center"
          onPress={() => {
            router.push("/(tabs)/translate");
          }}
        >
          <Feather name="book" size={28} color="white" />
          <Text className="text-white text-xl font-bold">Ir al traductor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primary w-1/2 rounded-3xl text-white gap-y-2 items-center justify-center"
          onPressIn={() => {
            router.push("/(tabs)/learn");
          }}
        >
          <SimpleLineIcons name="graduation" size={30} color="white" />
          <Text className="text-white text-xl font-bold">Ir a tus cursos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
