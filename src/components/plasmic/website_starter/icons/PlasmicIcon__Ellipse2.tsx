// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse2Icon(props: Ellipse2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"6.738"}
        cy={"6.738"}
        r={"6.738"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse2Icon;
/* prettier-ignore-end */
