import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import React from "react";


interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }) {
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
      <Box>
        <Icon name="apple" />
        <Text>
          Botao Login com conta Apple
        </Text>
      </Box>
    )
}
Body.ContinuarGoogle = () => {
  return (
      <Box>
        <Icon name="google" />
        <Text>
          Botao Login com conta Google
        </Text>
      </Box>
    )
}
