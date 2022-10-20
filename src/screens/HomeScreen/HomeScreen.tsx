import Box from "@src/components/Box";
import Body from "./patterns/Body/Body";
import Footer from "./patterns/Footer/Footer";
import Header from "./patterns/Header/Header";

export default function HomeScreen() {
  return (
      <Box
        tag= "main"
      >
        <Header />
        <Body />
        <Footer />
      </Box>
    )
}