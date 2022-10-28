import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";


interface BodyProps {
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Body({ children }) {
  

  return (
      <Box
      styleSheet={{
        gap: '1rem'
      }}  
      >
        {children}
      </Box>
    )
}

Body.Cadastrar = () => {
  return (
      <Box>
        <Text 
          styleSheet={{
            backgroundColor: theme.colors.primary.x400,
            color: theme.colors.neutral.x999,
            fontWeight: '600',
            borderRadius: '5px',
            boxShadow: 'inset -2px -2px 5px rgba(0, 0, 0, 0.25)',
            paddingTop: '0.2rem',
            paddingBottom: '0.2rem',
            

          }}
        >
          Cadastre-se
        </Text>
      </Box>
    )
}
Body.Login = () => {
  return (
      <Box>
        <Text
          styleSheet={{
            color: theme.colors.neutral.x000,
            fontWeight: '500',
            border: 'solid 1px',
            borderColor: theme.colors.neutral.x500,
            borderRadius: '5px',
            paddingTop: '0.2rem',
            paddingBottom: '0.2rem',
            

        }}
        >
          Entrar
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
          gap:'1rem',
          border: 'solid 1px',
          borderColor: theme.colors.neutral.x500,
          borderRadius: '5px',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '0.2rem',
          paddingBottom: '0.2rem',

          
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
          gap:'1rem',
          border: 'solid 1px',
          borderColor: theme.colors.neutral.x500,
          borderRadius: '5px',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '0.2rem',
          paddingBottom: '0.2rem',
      }}
      >
        <Icon name="google" />
        <Text>
          Continuar com Google
        </Text>
      </Box>
    )
}
