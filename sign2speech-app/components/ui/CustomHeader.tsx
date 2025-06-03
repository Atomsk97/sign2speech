import { FontAwesome6 } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function CustomHeader() {
  return (
    <View className="bg-secondary pt-8 -mb-8">
      <Text className="text-primary p-2 mt-2 font-nerko text-4xl">
        <FontAwesome6 name="hand" size={28} color="#166088" /> Sign2Speech
      </Text>
    </View>
  );
}
