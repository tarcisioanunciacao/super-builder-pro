// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fi2321232IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fi2321232Icon(props: Fi2321232IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.564 13.89a7.404 7.404 0 002.03-5.09c0-4.1-3.337-7.437-7.438-7.437-4.1 0-7.437 3.337-7.437 7.438a7.4 7.4 0 002.03 5.09C6.03 15.965 4 20.359 4 26.465c0 .514.417.93.93.93h20.453a.93.93 0 00.93-.93c0-6.107-2.032-10.5-5.749-12.574zM15.156 3.224A5.584 5.584 0 0120.734 8.8a5.584 5.584 0 01-5.578 5.578A5.584 5.584 0 019.578 8.8a5.584 5.584 0 015.578-5.578zm-9.28 22.312c.146-3.936 1.29-8.547 5.47-10.36a7.374 7.374 0 003.81 1.063 7.375 7.375 0 003.811-1.062c4.178 1.812 5.323 6.423 5.469 10.36H5.876z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".5"}
      ></path>
    </svg>
  );
}

export default Fi2321232Icon;
/* prettier-ignore-end */
