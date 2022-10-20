import Box from "@src/components/Box";
import theme from "@src/theme/theme";
import styled from "styled-components";

const MeuComponente = styled.div`
  color: purple;
`;

export default function HomeScreen() {
  return(
    <Box 
      tag= 'main'
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: 'red',
          sm: 'yellow',
          md: 'blue',
        }
      }}>
        <MeuComponente>
          Quer Carona 2 - NextJS - FrontEnd
        </MeuComponente>
    </Box>
  )
}