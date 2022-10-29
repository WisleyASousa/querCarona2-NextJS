import Box from "@src/components/Box/Box";
import TextFooter from "@src/components/Footer/TextFooter";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import Body from "./patterns/Body/Body";
import Footer from "./patterns/Footer/Footer";
import Header from "./patterns/Header/Header";


export default function HomeScreen() {
  return (
    <Box
      tag= "main"
      styleSheet={{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',

      }}
    >
      <Header>
        <Header.Imagem />
      </Header>
      <Body>
        <Body.Cadastrar />
        <Body.Login />
        <Body.ContinuarApple />
        <Body.ContinuarGoogle />
      </Body>
      <TextFooter>
          O quer carona usa cookies para conteúdo e anúncios personalizados de análise. 
          Ao usar os serviços do que carona, você concorda com esse uso de cokkies. 
          <Link 
            href="/sabermais"
            colorVariant='neutral'
            variant='body5'
          >
            Saber mais
          </Link>
          
      </TextFooter>
    </Box>
    )
}
