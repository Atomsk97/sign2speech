import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function LearnScreen() {
  const [selected, setSelected] = useState<"lecciones" | "diccionario">(
    "lecciones"
  );

  return (
    <View className="flex-1 bg-secondary px-4 py-16">
      <Text className="text-primary font-nerko text-4xl">
        Aprende con nosotros
      </Text>

      <View className="flex-row my-8 bg-white rounded-2xl ">
        <TouchableOpacity
          className={`w-1/2 px-4 py-2 rounded-l-2xl border-primary ${
            selected === "lecciones" ? "border-b-4 " : "border-b-2"
          }`}
          onPress={() => setSelected("lecciones")}
        >
          <Text
            className={`text-2xl font-nerko
              ${selected === "lecciones" ? "text-primary" : "text-primary/65"}`}
          >
            Lecciones
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`w-1/2 px-4 py-2 rounded-r-2xl border-primary ${
            selected === "diccionario" ? "border-b-4" : "border-b-2"
          }`}
          onPress={() => setSelected("diccionario")}
        >
          <Text
            className={`text-2xl font-nerko              
              ${
                selected === "diccionario" ? "text-primary" : "text-primary/65"
              }`}
          >
            Diccionario
          </Text>
        </TouchableOpacity>
      </View>

      {selected === "lecciones" ? (
        <Text>Aquí van las lecciones...</Text>
      ) : (
        <Text>Aquí va el diccionario...</Text>
      )}
    </View>
  );
}
