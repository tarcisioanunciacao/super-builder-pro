// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 .913A.913.913 0 01.913 0h.68C2.75 0 3.444.778 3.84 1.502c.264.482.456 1.041.605 1.548.04-.004.082-.005.122-.005h15.221c1.011 0 1.742.967 1.465 1.94l-2.227 7.805a3.35 3.35 0 01-3.22 2.431H8.562a3.35 3.35 0 01-3.23-2.462l-.926-3.376-1.534-5.174-.001-.01c-.19-.69-.368-1.337-.634-1.82-.254-.468-.459-.552-.643-.552h-.68A.913.913 0 010 .913zM6.178 8.94l.915 3.336c.183.66.783 1.12 1.469 1.12h7.244a1.523 1.523 0 001.464-1.105l2.115-7.418H4.975l1.186 4.003.017.064z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
