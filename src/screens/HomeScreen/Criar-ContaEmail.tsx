import Box from "@src/components/Box/Box";
import ButtonBase from "@src/components/Button/ButtonBase";
import TextFooter from "@src/components/Footer/TextFooter";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import theme from "@src/theme/theme";
import Body from "./patterns/Body/Body";
import Footer from "./patterns/Footer/Footer";
import Header from "./patterns/Header/Header";


export default function AddContaEmail() {
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
        
        <ButtonBase
          href="/"
          styleSheet={{
            borderRadius: '5px',
            border: 'solid 1px',
            borderColor: theme.colors.neutral.x999,

            hover: {  
              borderColor: theme.colors.primary.x400,

            }
          }}
          >
          <Body.ContinuarApple />
        </ButtonBase>
        <ButtonBase
          href="/"
          styleSheet={{
            borderRadius: '5px',
            border: 'solid 1px',
            borderColor: theme.colors.neutral.x999,

            hover: {
              borderColor: theme.colors.primary.x400,

            }
          }}
          >
          <Body.ContinuarGoogle />
        </ButtonBase>
      </Body>
      <TextFooter>
          O quer carona usa cookies para conteúdo e anúncios personalizados de análise. 
          Ao usar os serviços do que carona, você concorda com esse uso de cokkies. 
          <Link 
            href="/sabermais"
            styleSheet={{
              color: theme.colors.primary.x400
            }}
            variant='body5'
          >
            Saber mais
          </Link>
          
      </TextFooter>
    </Box>
    )
}
