// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group743IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group743Icon(props: Group743IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"22.829"}
        cy={"22.829"}
        r={"22.829"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Group743Icon;
/* prettier-ignore-end */
