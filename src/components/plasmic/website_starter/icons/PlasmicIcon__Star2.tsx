// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star2Icon(props: Star2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.678 0l2.215 5.257 5.44.612-4.073 3.839 1.127 5.625-4.733-2.884-4.744 2.865 1.15-5.622L0 5.837l5.442-.59L7.678 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star2Icon;
/* prettier-ignore-end */
