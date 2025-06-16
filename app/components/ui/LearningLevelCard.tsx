import React from "react";
import { Text, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  title: string;
  description: string;
}

const LearningLevelCard = ({ title, description, ...props }: Props) => {
  return (
    <View className="h-44 bg-primary/50 p-4 rounded-xl" {...props}>
      <Text className="text-primary text-4xl font-nerko mb-2">{title}</Text>
      <Text className="text-white">{description}</Text>
    </View>
  );
};

export default LearningLevelCard;
