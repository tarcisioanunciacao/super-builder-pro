// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector37Icon(props: Vector37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 15"}
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
          "M11.393 3.897a1.209 1.209 0 00-1.206-1.134H1.813c-.638 0-1.167.497-1.206 1.134l-.605 9.671a1.208 1.208 0 001.207 1.284h9.582a1.209 1.209 0 001.207-1.284l-.605-9.671zm-1.034.064l.604 9.671a.174.174 0 01-.171.184H1.208a.173.173 0 01-.173-.184l.605-9.67a.172.172 0 01.172-.163h8.374c.091 0 .167.072.172.162z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.891 3.8H9.11l.022-.003c.1-.012.496-.088.496-.516A3.282 3.282 0 006.345 0h-.692a3.278 3.278 0 00-3.28 3.28c0 .487.518.52.518.52zm5.64-1.037H3.47a2.243 2.243 0 012.182-1.727h.692c1.062 0 1.951.737 2.185 1.727zM7.9 5.7c0 .271-.087.526-.235.745-.332.49-.957.809-1.665.809-.708 0-1.333-.318-1.665-.809A1.325 1.325 0 014.1 5.7a.518.518 0 00-1.036 0c0 .483.15.936.412 1.327C3.982 7.774 4.92 8.29 6 8.29s2.018-.516 2.524-1.264a2.36 2.36 0 00.412-1.327.518.518 0 00-1.036 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector37Icon;
/* prettier-ignore-end */
