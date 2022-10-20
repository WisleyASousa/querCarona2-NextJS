import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  tag: any;
  children: React.ReactNode;
  styleSheet: StyleSheet;}

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || 'div';
  return (
      <Tag style={styleSheet}>
        {children}
      </Tag>
    )
}/Users/wisleya.sousa/Library/Mobile Documents/com~apple~CloudDocs/Programacao/Alura Cursos/NextJS/NextJS-FullStack-Front-end/querCarona2-NextJS/src