// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.812 8.487v1.505c0 .14-.025.278-.074.406-.05.129-.122.243-.213.338a.871.871 0 01-.315.211.789.789 0 01-.364.049 8.136 8.136 0 01-3.824-1.54 9.299 9.299 0 01-2.658-3.011 10.807 10.807 0 01-1.36-4.351 1.129 1.129 0 01.042-.41 1.04 1.04 0 01.186-.357.899.899 0 01.296-.241A.799.799 0 011.885 1h1.33a.827.827 0 01.586.243c.163.158.27.379.3.62.056.482.16.955.31 1.41.06.18.072.375.037.563a1.05 1.05 0 01-.237.496l-.562.637c.63 1.257 1.549 2.297 2.658 3.011l.563-.637a.86.86 0 01.438-.268.789.789 0 01.497.042c.402.17.82.288 1.245.351a.864.864 0 01.552.345c.14.188.215.428.21.674z"
        }
        stroke={"currentColor"}
        strokeWidth={".606"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
