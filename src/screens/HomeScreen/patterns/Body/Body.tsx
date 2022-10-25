import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import React from "react";


interface BodyProps {
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Body({ children, styleSheet }) {
  return (
      <Box>
        <Text>
          Body
        </Text>
        {children}
      </Box>
    )
}

Body.Cadastrar = () => {
  return (
      <Box>
        <Text>
          Botao Cadastrar
        </Text>
      </Box>
    )
}
Body.Login = () => {
  return (
      <Box>
        <Text>
          Botao de Login
        </Text>
      </Box>
    )
}
Body.ContinuarApple = () => {
  return (
      <Box
        styleSheet={{
          flexDirection: "row",
          alignItems:"center",
          gap:"2rem",

      }}
      >
        <Icon name="apple" />
        <Text>
          Continuar com Apple
        </Text>
      </Box>
    )
}
Body.ContinuarGoogle = () => {
  return (
      <Box
        styleSheet={{
          flexDirection: "row",
          alignItems:"center",
          gap:"2rem",
      }}
      >
        <Icon name="google" />
        <Text>
          Continuar com Google
        </Text>
      </Box>
    )
}
