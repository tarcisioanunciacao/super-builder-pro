// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1Icon(props: Ellipse1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"5.129"}
        cy={"5.129"}
        r={"5.129"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse1Icon;
/* prettier-ignore-end */
