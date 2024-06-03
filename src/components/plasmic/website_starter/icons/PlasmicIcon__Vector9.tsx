// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 19.666c2.178 0 4.243-1.368 5.562-3.667h2.104v4.132a.85.85 0 00.86.868.834.834 0 00.755-.48l3.63-7.268a.873.873 0 00-.046-.85.845.845 0 00-.719-.402h-2.813V7.868a.85.85 0 00-.665-.847.833.833 0 00-.95.459l-.786 1.573C14.462 4.51 11.534 1 8 1c-3.86 0-7 4.187-7 9.333s3.14 9.333 7 9.333zm8.316-11.891c.042-.088.106-.109.157-.109a.2.2 0 01.045.006c.045.01.148.05.148.196v4.465a.332.332 0 00.333.334h3.147a.18.18 0 01.154.088c.019.03.057.11.012.202l-3.63 7.268c-.057.117-.152.114-.202.103-.044-.01-.148-.05-.148-.197v-4.465a.333.333 0 00-.333-.333h-3.146a.18.18 0 01-.154-.088.208.208 0 01-.012-.203l3.629-7.267h0zm-1.985 2.48l-2.243 4.492a.874.874 0 00.046.85.843.843 0 00.656.394c-1.046 1.652-2.518 2.71-4.095 2.953A7.562 7.562 0 0010 14.666c0-2.28-.883-3.427-1.736-4.536C7.442 9.062 6.666 8.053 6.666 6c0-.84.15-2.913 1.475-4.329 3.408.104 6.16 3.906 6.19 8.585zm-7.105-8.52C6.131 3.265 6 5.176 6 6c0 2.28.882 3.427 1.735 4.536.822 1.068 1.598 2.077 1.598 4.13 0 1.584-.507 3.038-1.497 4.328-3.417-.12-6.17-3.957-6.17-8.661 0-4.42 2.432-8.076 5.56-8.6z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".435"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
