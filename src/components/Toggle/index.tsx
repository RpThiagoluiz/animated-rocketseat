import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { MotiView, useAnimationState, AnimatePresence } from "moti";

import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { timing } from "react-native-reanimated";

export function Toggle() {
  const [open, setOpen] = useState(false);

  // mudar os estados da animacao
  // oq vc cria ali dentro sao estados
  // AnimatePresence pra ele nao sobreescrever outra visualizacao.
  const toggleAnimationState = useAnimationState({
    closed: {
      height: 70,
    },
    open: {
      height: 170,
    },
  });

  const handleOpenToggle = () => {
    toggleAnimationState.transitionTo("open");
  };

  const handleCloseToggle = () => {
    toggleAnimationState.transitionTo("closed");
  };

  const handlePress = () => {
    setOpen((prevState) => !prevState);
    open
      ? toggleAnimationState.transitionTo("open")
      : toggleAnimationState.transitionTo("closed");
  };

  return (
    <MotiView style={styles.container} state={toggleAnimationState}>
      {/* <Pressable onPressIn={handleOpenToggle} onPressOut={handleCloseToggle}>
        <Feather name="tag" color={theme.colors.white} size={26} />
      </Pressable> */}

      <TouchableOpacity onPress={handlePress}>
        {open ? (
          <AnimatePresence>
            <MotiView
              from={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [
                  { value: 0, type: "timing" },
                  { value: 1.5, type: "spring" },
                  { value: 1, type: "timing" },
                ],
                opacity: 1,
              }}
            >
              <Feather name="tag" color={theme.colors.white} size={26} />
            </MotiView>
          </AnimatePresence>
        ) : (
          <MotiView
            from={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "90deg",
              opacity: 1,
            }}
            transition={{
              type: "timing",
            }}
          >
            <Feather name="x" color={theme.colors.white} size={26} />
          </MotiView>
        )}
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.label}>Calories</Text>

        <Text style={styles.value}>150</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Weight</Text>

        <Text style={styles.value}>190g</Text>
      </View>
    </MotiView>
  );
}
