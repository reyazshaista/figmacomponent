/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Simplewindow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="934px"
      height="442px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Simplewindow")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 61")}
      ></View>
      <Text
        fontFamily="Open Sans"
        fontSize="28px"
        fontWeight="300"
        color="rgba(255,255,255,1)"
        lineHeight="40px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="38.8%"
        bottom="44.4%"
        left="24.51%"
        right="24.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Marla Colorado is in the middle of her workday and receives a new task to order backpacks for a conference event."
        {...getOverrideProps(
          overrides,
          "Marla Colorado is in the middle of her workday and receives a new task to order backpacks for a conference event."
        )}
      ></Text>
    </View>
  );
}
