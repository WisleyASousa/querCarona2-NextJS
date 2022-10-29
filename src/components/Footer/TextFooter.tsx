import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";


interface FooterProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'span' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref: any;

}

const TextFooter = React.forwardRef(({ styleSheet, tag, variant, ...props }: FooterProps, ref) => {
  const Tag = tag;

  const theme = useTheme();
  const textvariant = theme.typography.variants[variant];
  return (
     <BaseComponent
        as={Tag}
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
          
      }} ref={ref}
      {...props} />
        
    )
})

TextFooter.defaultProps = {
  tag: 'p',
  variant: 'body5',
};

export default TextFooter;