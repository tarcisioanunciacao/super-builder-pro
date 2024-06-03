// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame15Icon(props: Frame15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 110 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.944 0l2.534 5.457 5.973.723-4.407 4.097 1.158 5.903-5.258-2.925-5.257 2.925 1.157-5.903L.438 6.18l5.972-.723L8.944 0zm23.028 0l2.534 5.456 5.973.724-4.407 4.097 1.158 5.903-5.258-2.925-5.257 2.925 1.157-5.903-4.406-4.097 5.972-.724L31.972 0zM55 0l2.534 5.456 5.972.724-4.406 4.097 1.157 5.903L55 13.255l-5.258 2.925 1.158-5.903-4.407-4.097 5.973-.724L55 0zm23.028 0l2.366 5.688 6.14.492-4.678 4.008 1.43 5.992-5.258-3.21-5.258 3.21 1.43-5.992-4.68-4.008 6.141-.492L78.028 0zm23.028 0l2.534 5.456 5.972.724-4.406 4.097 1.157 5.903-5.257-2.925-5.257 2.925 1.157-5.903-4.407-4.097 5.973-.724L101.056 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame15Icon;
/* prettier-ignore-end */
