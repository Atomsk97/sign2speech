import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AvatarFrame from "@/components/AvatarFrame";

export default function AvatarScreeen() {
  const [option, setOption] = useState<number>(1);
  return (
    <View className="bg-secondary px-4 flex-1 items-center justify-center">
      <View className="bg-primary/50 w-full mb-4 self-center rounded-2xl overflow-hidden pt-4">
        <AvatarFrame width={125} height={259} />
      </View>
      <View className="bg-primary w-full h-1"></View>

      <View className="flex-row w-full justify-between">
        <TouchableOpacity
          className={`flex-col min-w-20 gap-y-1 items-center justify-center p-2 ${
            option === 1 ? "bg-primary/50" : ""
          }`}
          onPress={() => {
            setOption(1);
          }}
        >
          <View className="flex-row items-center justify-center gap-x-1">
            <FontAwesome6
              name="person"
              size={28}
              color={`${option === 1 ? "white" : "#4A6FA5"}`}
            />
            <FontAwesome6
              name="person-dress"
              size={28}
              color={`${option === 1 ? "white" : "#4A6FA5"}`}
            />
          </View>

          <Text
            className={`${option === 1 ? "text-white" : "text-primary/50"}`}
          >
            Género
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-col min-w-20 gap-y-1 items-center justify-center p-2 ${
            option === 2 ? "bg-primary/50" : ""
          }`}
          onPress={() => {
            setOption(2);
          }}
        >
          <Ionicons
            className="self-center"
            name="shirt"
            size={28}
            color={`${option === 2 ? "white" : "#4A6FA5"}`}
          />

          <Text
            className={`${option === 2 ? "text-white" : "text-primary/50"}`}
          >
            Superior
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-col min-w-20 gap-y-1 items-center justify-center p-2 ${
            option === 3 ? "bg-primary/50" : ""
          }`}
          onPress={() => {
            setOption(3);
          }}
        >
          <FontAwesome5
            className="self-center"
            name="socks"
            size={28}
            color={`${option === 3 ? "white" : "#4A6FA5"}`}
          />

          <Text
            className={`${option === 3 ? "text-white" : "text-primary/50"}`}
          >
            Inferior
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-col min-w-20 gap-y-1 items-center justify-center p-2 ${
            option === 4 ? "bg-primary/50" : ""
          }`}
          onPress={() => {
            setOption(4);
          }}
        >
          <View className="flex-row items-center justify-center gap-x-1">
            <Ionicons
              className="self-center"
              name="shirt"
              size={28}
              color={`${option === 4 ? "white" : "#4A6FA5"}`}
            />
            <MaterialCommunityIcons
              name="shoe-sneaker"
              size={28}
              color={`${option === 4 ? "white" : "#4A6FA5"}`}
            />
          </View>

          <Text
            className={`${option === 4 ? "text-white" : "text-primary/50"}`}
          >
            Conjunto
          </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-primary w-full h-1"></View>
      <View className="flex-row justify-between gap-x-2 mt-4 min-h-20">
        {option === 1 ? (
          <>
            <View className="bg-primary/50 w-1/2 self-center rounded-2xl overflow-hidden pt-4">
              <AvatarFrame width={100} height={140} option="3" />
            </View>
            <View className="bg-primary/50 w-1/2 self-center rounded-2xl overflow-hidden pt-4">
              <AvatarFrame width={75} height={140} option="2" />
            </View>
          </>
        ) : (
          <View>
            <Text>Work in progress...</Text>
          </View>
        )}
      </View>
    </View>
  );
}
