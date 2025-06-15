import AvatarFrame from "@/components/AvatarFrame";
import { useAppContext } from "@/context/AppContext";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableHighlight,
  Keyboard,
  ScrollView,
} from "react-native";

//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function TranslateScreen() {
  const [translatedText, setTranslatedText] = useState<string>("");
  const { cameraPermissionStatus, requestCameraPermission } = useAppContext();

  return (
    <ScrollView
      className="flex-1 bg-secondary"
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 8,
      }}
      bounces={false}
      onScrollBeginDrag={() => Keyboard.dismiss()}
      keyboardShouldPersistTaps="handled"
    >
      <View className="bg-primary/50 w-full mb-4 self-center items-center justify-center rounded-2xl overflow-hidden">
        <View className="w-full flex-row items-center justify-between mt-2">
          <Text
            className="text-primary font-nerko text-2xl"
            style={{
              left: "50%",
              transform: [{ translateX: "-50%" }],
            }}
          >
            {translatedText}
          </Text>
          <TouchableHighlight
            className="bg-primary/80 rounded-full p-4 me-2"
            onPress={() => {
              console.log("Open notebook pressed");
            }}
          >
            <SimpleLineIcons name="notebook" size={24} color={"white"} />
          </TouchableHighlight>
        </View>
        <AvatarFrame />
      </View>

      <View className="flex-row items-center justify-between gap-x-2">
        <View className="flex-row items-center justify-between bg-primary/50 rounded-full px-4 py-2 w-5/6 gap-x-2">
          <TextInput
            className="text-xl flex-1"
            placeholderTextColor={"#DBE9EE"}
            placeholder="Escribe para traducir..."
            enterKeyHint="send"
            onSubmitEditing={(e) => {
              setTranslatedText(e.nativeEvent.text.trim());
            }}
          />
          <TouchableHighlight
            className="bg-primary/80 rounded-full p-4"
            onPress={() => {
              if (cameraPermissionStatus === "not-determined") {
                requestCameraPermission();
              } else if (cameraPermissionStatus === "denied") {
                console.warn("Camera permission denied");
              } else {
                console.log("Camera permission granted, ready to use camera");
              }
            }}
          >
            <Feather name="camera" size={24} color={"white"} />
          </TouchableHighlight>
        </View>
        <TouchableHighlight className="self-center bg-primary/80 rounded-full p-4">
          <Feather name="mic" size={24} color={"white"} />
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}
