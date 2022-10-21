import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyle";
// Estrutura Base de Estilo Global 
export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
}