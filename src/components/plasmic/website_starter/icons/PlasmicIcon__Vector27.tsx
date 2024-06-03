// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector27Icon(props: Vector27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.35 20.6c2.287 0 4.456-1.437 5.84-3.85h2.21v4.337a.892.892 0 00.903.912.875.875 0 00.792-.504l3.811-7.632a.917.917 0 00-.047-.893.887.887 0 00-.755-.421H18.15V8.21a.892.892 0 00-.699-.888.875.875 0 00-.997.48l-.825 1.652C15.136 4.686 12.06 1 8.349 1 4.298 1 1 5.396 1 10.8c0 5.403 3.297 9.8 7.35 9.8zm8.73-12.487c.045-.093.112-.114.165-.114a.21.21 0 01.048.005c.047.01.155.053.155.207V12.9a.348.348 0 00.35.35h3.304c.09 0 .14.058.162.092.02.032.06.116.013.213l-3.811 7.631c-.06.123-.16.12-.213.108-.047-.01-.155-.052-.155-.206V16.4a.35.35 0 00-.35-.35h-3.303a.189.189 0 01-.162-.093.218.218 0 01-.013-.213l3.81-7.63h0zm-2.083 2.604l-2.355 4.716a.917.917 0 00.047.893.885.885 0 00.69.413c-1.1 1.735-2.644 2.847-4.3 3.101a7.94 7.94 0 001.37-4.492c0-2.394-.927-3.598-1.823-4.763C7.765 9.465 6.95 8.406 6.95 6.25c0-.882.157-3.058 1.549-4.544 3.578.108 6.467 4.101 6.499 9.014zM7.538 1.77C6.388 3.38 6.25 5.384 6.25 6.25c0 2.394.926 3.598 1.822 4.763.863 1.121 1.678 2.18 1.678 4.337 0 1.662-.532 3.189-1.572 4.543C4.59 19.768 1.7 15.738 1.7 10.8c0-4.642 2.553-8.48 5.838-9.03z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".8"}
      ></path>
    </svg>
  );
}

export default Vector27Icon;
/* prettier-ignore-end */
