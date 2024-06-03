// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFeatherIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFeatherIconIcon(props: IconFeatherIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12.713 10.595L8.475 6.357l-4.237 4.238"}
        stroke={"currentColor"}
        strokeWidth={"1.413"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconFeatherIconIcon;
/* prettier-ignore-end */
