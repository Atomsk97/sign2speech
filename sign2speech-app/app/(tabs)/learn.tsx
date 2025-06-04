import LearningLevelCard from "@/components/ui/LearningLevelCard";
import OptionsCard from "@/components/ui/OptionsCard";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function LearnScreen() {
  const [selected, setSelected] = useState<"lecciones" | "diccionario">(
    "lecciones"
  );

  return (
    <View className="flex-1 bg-secondary px-4 py-10">
      <Text className="text-primary font-nerko text-4xl">
        Aprende con nosotros
      </Text>

      <View className="flex-row my-4 bg-white rounded-2xl ">
        <TouchableOpacity
          className={`w-1/2 px-4 py-2 rounded-l-2xl border-primary ${
            selected === "lecciones" ? "border-b-4 " : "border-b-2"
          }`}
          onPress={() => setSelected("lecciones")}
        >
          <Text
            className={`text-2xl font-nerko text-center
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
            className={`text-2xl font-nerko text-center              
              ${
                selected === "diccionario" ? "text-primary" : "text-primary/65"
              }`}
          >
            Diccionario
          </Text>
        </TouchableOpacity>
      </View>

      {selected === "lecciones" ? (
        <>
          <ScrollView className="flex-1">
            <View className="gap-4">
              <LearningLevelCard
                title="Nivel básico"
                description="Aprende el abecedario, saludos y señas esenciales para comunicarte en situaciones cotidianas. Ideal para quienes empiezan desde cero."
              />
              <LearningLevelCard
                title="Nivel intermedio"
                description="Profundiza en frases completas, expresiones comunes y estructuras básicas de conversación. Mejora tu fluidez y comprensión."
              />
              <LearningLevelCard
                title="Nivel avanzado"
                description="Domina conversaciones complejas, modismos, y señas técnicas. Desarrolla habilidades para comunicarte con soltura en diversos contextos."
              />
            </View>
          </ScrollView>
          <Image
            source={require("@/assets/images/image123.png")}
            className="w-full h-32 absolute -bottom-8 mx-4"
            resizeMode="contain"
          />
        </>
      ) : (
        <View className="flex-row flex-wrap gap-4">
          <OptionsCard title="Alfabeto" image="alfabeto" />
          <OptionsCard title="Animales" image="animales" />
          <OptionsCard title="Familia" image="familia" />
          <OptionsCard title="Números" image="numeros" />
          <OptionsCard title="Paises(A-L)" image="paises" />
          <OptionsCard title="Paises(M-Z)" image="paises" />
        </View>
      )}
    </View>
  );
}
