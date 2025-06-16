import AvatarFrame from "@/components/AvatarFrame";
import { useAppContext } from "@/context/AppContext";
import { Feather, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  TextInput,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withSpring,
  withSequence,
} from "react-native-reanimated";
const avatar = require("@/assets/images/avatar.png");

const MIN_SCALE = 1;
const MAX_SCALE = 2;

export default function TranslateScreen() {
  const {
    cameraPermissionStatus,
    requestCameraPermission,
    microphonePermissionStatus,
    requestMicrophonePermission,
  } = useAppContext();

  const [translatedText, setTranslatedText] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [recognizing, setRecognizing] = useState(false);
  const [transcript, setTranscript] = useState<string>(
    "Pulse el botón para iniciar la grabación, esta se detendrá si no detecta más palabras"
  );

  const volumeScale = useSharedValue(MIN_SCALE);
  const pulseScale = useSharedValue(MIN_SCALE);
  const pulseOpacity = useSharedValue(0);

  const reset = () => {
    volumeScale.value = MIN_SCALE;
    pulseScale.value = MIN_SCALE;
    pulseOpacity.value = 0;
  };

  useSpeechRecognitionEvent("start", () => {
    setRecognizing(true);
    reset();
  });
  useSpeechRecognitionEvent("end", () => {
    setRecognizing(false);
    setTranslatedText(transcript);
    reset();
  });
  useSpeechRecognitionEvent("volumechange", (event) => {
    // Don't animate anything if the volume is too low
    if (event.value <= 1) {
      return;
    }

    const newScale = interpolate(
      event.value,
      [-2, 10], // The value range is between -2 and 10
      [MIN_SCALE, MAX_SCALE],
      Extrapolation.CLAMP
    );

    // Animate the volume scaling
    volumeScale.value = withSequence(
      withSpring(newScale, {
        damping: 10,
        stiffness: 150,
      }),
      // Scale back down, unless the volume changes again
      withTiming(MIN_SCALE, { duration: 500 })
    );

    // Animate the pulse (scale and fade out)
    if (pulseOpacity.value <= 0) {
      pulseScale.value = MIN_SCALE;
      pulseOpacity.value = 1;
      pulseScale.value = withTiming(MAX_SCALE, {
        duration: 1000,
        easing: Easing.out(Easing.quad),
      });
      pulseOpacity.value = withTiming(0, { duration: 1000 });
    }
  });
  useSpeechRecognitionEvent("result", (event) => {
    setTranscript(event.results[0]?.transcript);
  });
  useSpeechRecognitionEvent("error", (event) => {
    console.log("error code:", event.error, "error message:", event.message);
  });

  const volumeScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: volumeScale.value }],
  }));

  const pulseStyle = useAnimatedStyle(() => ({
    opacity: pulseOpacity.value,
    transform: [{ scale: pulseScale.value }],
  }));

  const handleStart = async () => {
    ExpoSpeechRecognitionModule.start({
      lang: "es-ES",
      interimResults: true,
      continuous: false,
      volumeChangeEventOptions: {
        enabled: true,
        intervalMillis: 250,
      },
    });
  };

  return (
    <View className="flex-1 bg-secondary pt-8 px-4 pb-2">
      <View className="bg-primary/50 w-full mb-4 self-center items-center justify-center rounded-2xl overflow-hidden">
        <View className="w-full flex-row items-center justify-between mt-2">
          <Text
            className="text-primary font-nerko text-2xl w-3/4"
            style={{
              left: "50%",
              transform: [{ translateX: "-50%" }],
            }}
          >
            {translatedText}
          </Text>
          <TouchableOpacity
            className="bg-primary/80 rounded-full p-4 me-2"
            onPress={() => {
              console.log("Open notebook pressed");
            }}
          >
            <SimpleLineIcons name="notebook" size={24} color={"white"} />
          </TouchableOpacity>
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
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="self-center bg-primary/80 rounded-full p-4"
          onPress={() => {
            if (microphonePermissionStatus === false) {
              requestMicrophonePermission();
            } else {
              setShowModal(true);
            }
          }}
        >
          <Feather name="mic" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.container}>
              <View style={styles.absoluteCenteredContainer}>
                <Animated.View
                  style={[styles.circularBorder, volumeScaleStyle]}
                />
              </View>
              <View style={styles.absoluteCenteredContainer}>
                <Animated.View style={[styles.pulse, pulseStyle]} />
              </View>
              <View style={[styles.centered]}>
                <Image source={avatar} style={styles.avatar} />
              </View>
            </View>
            {!recognizing ? (
              <View className="flex-row gap-x-2">
                <TouchableOpacity
                  className="bg-primary/60 rounded-full p-4"
                  onPress={handleStart}
                >
                  <MaterialIcons
                    name="record-voice-over"
                    size={24}
                    color={"white"}
                  />
                </TouchableOpacity>

                {translatedText.trim() !== "" ? (
                  <TouchableOpacity className="bg-primary/60 rounded-full p-4">
                    <MaterialIcons name="send" size={24} color={"white"} />
                  </TouchableOpacity>
                ) : (
                  <></>
                )}
              </View>
            ) : (
              <TouchableOpacity
                className="bg-primary/60 rounded-full p-4"
                onPress={() => ExpoSpeechRecognitionModule.stop()}
              >
                <MaterialIcons name="stop" size={24} color={"white"} />
              </TouchableOpacity>
            )}

            <ScrollView style={styles.transcriptContainer}>
              <Text style={styles.transcriptText}>{transcript}</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  transcriptContainer: {
    marginTop: 20,
    maxHeight: 150,
    width: "100%",
  },
  transcriptText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  container: {
    position: "relative",
    marginVertical: 20,
  },
  absoluteCenteredContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  pulse: {
    borderWidth: 1,
    borderColor: "#539bf5",
    width: 96,
    height: 96,
    borderRadius: 96,
  },
  circularBorder: {
    backgroundColor: "#6b7280",
    width: 96,
    height: 96,
    borderRadius: 96,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 96,
    overflow: "hidden",
  },
});
