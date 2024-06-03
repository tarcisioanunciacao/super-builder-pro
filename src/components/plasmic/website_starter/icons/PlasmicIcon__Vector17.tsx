// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 10"}
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
          "M7.67 2.624a.814.814 0 00-.811-.764H1.22a.814.814 0 00-.812.764L.002 9.135A.813.813 0 00.814 10h6.452a.814.814 0 00.812-.865L7.67 2.624zm-.695.043l.407 6.512a.117.117 0 01-.116.124H.814a.116.116 0 01-.116-.124l.407-6.512a.116.116 0 01.116-.109h5.638c.061 0 .112.048.116.109z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.947 2.558h4.186l.015-.001c.067-.009.334-.06.334-.348A2.21 2.21 0 004.272 0h-.466a2.207 2.207 0 00-2.208 2.208c0 .328.349.35.349.35zm3.796-.698H2.336A1.51 1.51 0 013.806.698h.466c.715 0 1.314.496 1.471 1.162zm-.424 1.977a.892.892 0 01-.158.503c-.224.33-.645.544-1.121.544-.477 0-.898-.214-1.121-.544a.892.892 0 01-.158-.503.349.349 0 00-.698 0c0 .325.1.63.278.893.34.504.971.851 1.699.851.727 0 1.358-.347 1.699-.85.177-.264.277-.569.277-.894a.349.349 0 00-.697 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
