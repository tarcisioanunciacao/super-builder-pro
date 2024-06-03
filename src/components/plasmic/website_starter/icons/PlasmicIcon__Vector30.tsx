// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector30Icon(props: Vector30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.04 0a6.04 6.04 0 106.04 6.04A6.046 6.046 0 006.04 0zm2.65 4.974L5.44 8.227a.465.465 0 01-.657 0L3.388 6.833a.465.465 0 11.657-.658L5.11 7.241l2.924-2.924a.465.465 0 11.657.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
