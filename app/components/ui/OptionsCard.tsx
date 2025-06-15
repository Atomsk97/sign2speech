import React from "react";
import { Image, Text, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  title: string;
  image: string;
}

const imageMap: Record<string, any> = {
  alfabeto: require("@/assets/images/alfabeto.png"),
  animales: require("@/assets/images/animales.png"),
  familia: require("@/assets/images/familia.png"),
  numeros: require("@/assets/images/numeros.png"),
  paises: require("@/assets/images/paises.png"),
};

const OptionsCard = ({ title, image, ...props }: Props) => {
  return (
    <View
      className="w-[48%] bg-primary p-4 flex items-center justify-center rounded-xl "
      {...props}
    >
      <Image
        className="w-24 h-24"
        source={imageMap[image.toLocaleLowerCase()]}
      />
      <Text className="text-white text-center text-3xl font-nerko">
        {title}
      </Text>
    </View>
  );
};

export default OptionsCard;
