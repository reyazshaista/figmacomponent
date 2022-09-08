/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Testingscreen(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="637px"
      height="374px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Testingscreen")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="8.29%"
        bottom="78.34%"
        left="7.06%"
        right="61.07%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Request Number"
        {...getOverrideProps(overrides, "Request Number")}
      ></Text>
      <View
        position="absolute"
        top="18.72%"
        bottom="70.86%"
        left="8.01%"
        right="67.5%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <View
        position="absolute"
        top="13.64%"
        bottom="79.95%"
        left="7.85%"
        right="71.43%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <View
        position="absolute"
        top="17.11%"
        bottom="77.27%"
        left="30.3%"
        right="45.53%"
        transformOrigin="top left"
        transform="rotate(180deg)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
    </View>
  );
}
