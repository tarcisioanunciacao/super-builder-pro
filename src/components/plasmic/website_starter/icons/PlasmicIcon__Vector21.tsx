// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.4 3.2a3.2 3.2 0 11-6.4 0 3.2 3.2 0 016.4 0zM4 3.2a.8.8 0 10-1.6 0 .8.8 0 001.6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
