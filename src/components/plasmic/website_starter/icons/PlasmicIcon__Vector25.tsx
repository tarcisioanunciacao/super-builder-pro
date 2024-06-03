// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.16 8.224a.614.614 0 00.471-.003l1.84-.777a.615.615 0 00-.478-1.134l-.45.19a8.818 8.818 0 0116.61 1.34.616.616 0 001.191-.307A10.048 10.048 0 001.39 6.067l-.208-.493a.615.615 0 00-1.133.479l.776 1.84c.064.15.184.27.335.33zm19.791 6.598l-.776-1.84a.616.616 0 00-.806-.328l-1.84.777a.615.615 0 00.478 1.134l.515-.218a8.818 8.818 0 01-16.675-1.189.616.616 0 00-1.191.309 10.048 10.048 0 0018.98 1.404l.182.43a.615.615 0 101.133-.479z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.266 17.272a.61.61 0 00.683-.187l5.154-6.234a.616.616 0 00-.474-1.007h-2.242V4.266a.615.615 0 00-1.09-.392l-5.154 6.234a.615.615 0 00.475 1.007H8.86v5.578c0 .26.162.491.406.579zM7.924 9.885l3.232-3.91v4.484c0 .34.276.615.615.615h1.55l-3.231 3.91V10.5a.615.615 0 00-.615-.615h-1.55z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
