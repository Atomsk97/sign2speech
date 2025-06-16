import { useState, useCallback, createContext, useContext } from "react";
import { Linking } from "react-native";
import {
  Camera,
  type CameraPermissionStatus,
} from "react-native-vision-camera";

import { ExpoSpeechRecognitionModule } from "expo-speech-recognition";

const AppContext = createContext<any>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider = ({ children }: any) => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");

  const [microphonePermissionStatus, setMicrophonePermissionStatus] =
    useState<boolean>(false);

  const requestCameraPermission = useCallback(async () => {
    console.log("Pidiendo permiso para la camara");
    const permission = await Camera.requestCameraPermission();
    console.log("Estado del permiso de la camara:", permission);

    if (permission === "denied") await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  const requestMicrophonePermission = useCallback(async () => {
    console.log("Pidiendo permiso para el microfono");
    const permission =
      await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    console.log("Estado del permiso del microfono:", permission);

    if (!permission.granted) await Linking.openSettings();
    setMicrophonePermissionStatus(permission.granted);
  }, []);

  return (
    <AppContext.Provider
      value={{
        cameraPermissionStatus,
        requestCameraPermission,
        microphonePermissionStatus,
        requestMicrophonePermission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
