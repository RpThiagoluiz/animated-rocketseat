import React from "react";
import { MotiImage } from "moti";

import { styles } from "./styles";
import plateImg from "../../assets/plate.png";

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{ rotate: "180deg", opacity: 0 }}
      animate={{
        rotate: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 2000,
        repeat: 3,
        // repeatReverse: false, - padrao true, ele volta pra 0 caso vc coloque como false
        // loop: true, fica infinito
      }}
    />
  );
}
