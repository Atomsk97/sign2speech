import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <View className="flex-1 bg-secondary px-4 py-10">
      <Text className="text-primary font-nerko text-4xl">Configurar</Text>

      <Text className="text-primary font-nerko text-2xl">Datos personales</Text>
      <View className="flex-row items-center justify-between border-primary border-2 rounded-xl px-4 py-2 my-4">
        <View className="flex-row items-center gap-2">
          <Ionicons name="enter-outline" size={32} color="#166088" />
          <Text className="text-primary text-xl">Entrar a mi cuenta</Text>
        </View>
        <AntDesign name="right" size={32} color="#166088" />
      </View>

      <Text className="text-primary font-nerko text-2xl">Ayuda</Text>
      <View className="flex-row items-center justify-between border-primary border-2 rounded-xl px-4 py-2 my-4">
        <View className="flex-row items-center gap-2">
          <FontAwesome5 name="robot" size={32} color="#166088" />
          <Text className="text-primary text-xl">Tutorial</Text>
        </View>
        <AntDesign name="right" size={32} color="#166088" />
      </View>
      <View className="flex-row items-center justify-between border-primary border-2 rounded-xl px-4 py-2 my-4">
        <View className="flex-row items-center gap-2">
          <AntDesign name="question" size={32} color="#166088" />
          <Text className="text-primary text-xl">Preguntas frecuentes</Text>
        </View>
        <AntDesign name="right" size={32} color="#166088" />
      </View>

      <Text className="text-primary font-nerko text-2xl">Idioma</Text>
      <TouchableOpacity
        onPress={() => setShowLanguages(!showLanguages)}
        className="flex-row items-center justify-between border-primary border-2 rounded-xl px-4 py-2 mt-4 mb-2"
      >
        <View className="flex-row items-center gap-2">
          <AntDesign name="zhihu" size={32} color="#166088" />
          <Text className="text-primary text-xl">Lenguaje de señas</Text>
        </View>
        <AntDesign
          name={showLanguages ? "up" : "right"}
          size={32}
          color="#166088"
        />
      </TouchableOpacity>
      {showLanguages && (
        <View>
          <TouchableOpacity className="flex-row items-center justify-between border-primary border-2 rounded-xl px-4 py-2 mt-2">
            <Text className="text-primary text-lg ">
              Lenguaje de señas peruano
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between border-primary border-2 rounded-xl px-4 py-2 mt-2">
            <Text className="text-primary text-lg ">
              Lenguaje de señas portugués
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View className="absolute bottom-0">
        <Text className="text-primary font-nerko text-2xl">Nuestras redes</Text>
        <View className="w-full flex-row items-center justify-around py-4 mx-4">
          <AntDesign name="facebook-square" size={54} color="#166088" />
          <AntDesign name="instagram" size={54} color="#166088" />
          <FontAwesome5 name="tiktok" size={54} color="#166088" />
        </View>
      </View>
    </View>
  );
}
