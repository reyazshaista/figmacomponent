/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SupplierCallout(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="120px"
      height="218px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SupplierCallout")}
    >
      <Text
        fontFamily="Open Sans"
        fontSize="12px"
        fontWeight="700"
        color="rgba(42,76,126,1)"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="89.91%"
        bottom="0%"
        left="35.83%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Learn More"
        {...getOverrideProps(overrides, "A recent poll by Del")}
      ></Text>
      <Icon
        width="49px"
        height="56px"
        viewBox={{ minX: 0, minY: 0, width: 49, height: 56 }}
        paths={[
          {
            d: "M24.5 0L24.7481 -0.434122L24.5 -0.575876L24.2519 -0.434122L24.5 0ZM49 14L49.5 14L49.5 13.7098L49.2481 13.5659L49 14ZM49 42L49.2481 42.4341L49.5 42.2902L49.5 42L49 42ZM24.5 56L24.2519 56.4341L24.5 56.5759L24.7481 56.4341L24.5 56ZM0 42L-0.5 42L-0.5 42.2902L-0.24807 42.4341L0 42ZM0 14L-0.24807 13.5659L-0.5 13.7098L-0.5 14L0 14ZM24.2519 0.434122L48.7519 14.4341L49.2481 13.5659L24.7481 -0.434122L24.2519 0.434122ZM48.5 14L48.5 42L49.5 42L49.5 14L48.5 14ZM48.7519 41.5659L24.2519 55.5659L24.7481 56.4341L49.2481 42.4341L48.7519 41.5659ZM24.7481 55.5659L0.24807 41.5659L-0.24807 42.4341L24.2519 56.4341L24.7481 55.5659ZM0.5 42L0.5 14L-0.5 14L-0.5 42L0.5 42ZM0.24807 14.4341L24.7481 0.434122L24.2519 -0.434122L-0.24807 13.5659L0.24807 14.4341ZM48.7519 13.5659L24.2519 27.5659L24.7481 28.4341L49.2481 14.4341L48.7519 13.5659ZM24.7481 27.5659L0.24807 13.5659L-0.24807 14.4341L24.2519 28.4341L24.7481 27.5659ZM24 28L24 55.6769L25 55.6769L25 28L24 28Z",
            stroke: "rgba(199,255,208,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M24.5 0L49 14L49 42L24.5 56L0 42L0 14L24.5 0Z",
            fill: "rgba(42,76,126,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="0%"
        bottom="74.31%"
        left="0%"
        right="59.17%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </View>
  );
}
