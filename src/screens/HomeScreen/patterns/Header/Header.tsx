import Box from "@src/components/Box/Box";
import React from "react";
import Image from "next/future/image";
import profilePic from "../../../../../public/img/QuerCaronalogo2.png"
interface HearderProps {
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Header({ children }) {
  return (
      <Box>
          {children}
      </Box>
    )
}
Header.Imagem = () => {
  return (
    <Box
      styleSheet={{
        paddingTop: '2rem'
      }}
    >
      <Image
        src={profilePic}
        alt="Logo do 'Quer Carona?'"
        
        />
    </Box>
  )
}