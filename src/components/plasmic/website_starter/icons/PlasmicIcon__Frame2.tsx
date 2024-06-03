// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2Icon(props: Frame2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.786 1.351a12.436 12.436 0 1012.436 12.436A12.45 12.45 0 0013.786 1.351z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
