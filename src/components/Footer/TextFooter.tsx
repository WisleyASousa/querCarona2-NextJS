import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";


interface FooterProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function TextFooter({ styleSheet, children, tag, variant, ...props }: FooterProps){
  const Tag = tag || 'p';

  const theme = useTheme();
  const textvariant = theme.typography.variants[variant];
  return (
     <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        color: '#BCBCBC',
        ...textvariant,
        textAlign: "justify",
        position: 'fixed',
        bottom: '0',
        alignItems: 'center',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingBottom: '1rem',
        width: '320px',
      }}>
        {children}
      </BaseComponent> 
    )
}

TextFooter.defaultProps = {
  tag: 'p',
  variant: 'body5',
};