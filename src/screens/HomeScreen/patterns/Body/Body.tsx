import Box from "@src/components/Box/Box";
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
        <Text>
          Botao Login com conta Apple
        </Text>
      </Box>
    )
}
Body.ContinuarGoogle = () => {
  return (
      <Box>
        <Text>
          Botao Login com conta Google
        </Text>
      </Box>
    )
}
