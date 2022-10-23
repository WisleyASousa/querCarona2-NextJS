import Box from "@src/components/Box/Box";
import TextFooter from "@src/components/Footer/TextFooter";
import Text from "@src/components/Text/Text";

interface FooterProps {
  children: React.ReactNode;
}

export default function Footer({ children }) {
  return (
    <Box>
        {children}
    </Box>
    )
}