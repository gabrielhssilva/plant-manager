import React from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";

import { Welcome } from "./src/pages/Welcome";
import { UserIdentification } from "./src/pages/UserIdentification";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Welcome />
    // <UserIdentification/>
  );
}
