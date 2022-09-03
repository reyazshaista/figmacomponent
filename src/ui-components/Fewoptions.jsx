/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Fewoptions(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="300px"
      height="340px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 300, height: 340 }}
      paths={[
        {
          d: "M0 0L0 -1L-1 -1L-1 0L0 0ZM300 0L301 0L301 -1L300 -1L300 0ZM300 340L300 341L301 341L301 340L300 340ZM0 340L-1 340L-1 341L0 341L0 340ZM0 1L300 1L300 -1L0 -1L0 1ZM299 0L299 340L301 340L301 0L299 0ZM300 339L0 339L0 341L300 341L300 339ZM1 340L1 0L-1 0L-1 340L1 340Z",
          stroke: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 0L300 0L300 340L0 340L0 0Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Fewoptions")}
    ></Icon>
  );
}
