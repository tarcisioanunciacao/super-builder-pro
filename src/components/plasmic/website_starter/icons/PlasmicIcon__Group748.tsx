// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group748IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group748Icon(props: Group748IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 74 74"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"36.795"}
        cy={"36.795"}
        r={"36.795"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Group748Icon;
/* prettier-ignore-end */
