import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import Box from "../Box/Box";



interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1'  | 'h2' | 'h3' | 'h4' | 'span';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Text({
  tag,
  styleSheet, 
  variant,
  ...props
}: TextProps) {

  const theme = useTheme();
  const textvariant = theme.typography.variants[variant];
  return (
    <BaseComponent
      as={tag}
      styleSheet={{ 
        fontFamily: theme.typography.fontFamily,
        ...textvariant,
        ...styleSheet, 
      }} 
      {...props} />
  )
}


// definindo a tag padrão
Text.defaultProps = {
  tag: 'p', 
  variant: 'body2', 
};