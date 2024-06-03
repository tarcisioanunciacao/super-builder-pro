// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 .794A.794.794 0 01.794 0h.59C2.39 0 2.993.676 3.337 1.305c.23.419.396.905.526 1.345.035-.003.07-.004.106-.004h13.227c.878 0 1.513.84 1.272 1.686l-1.935 6.783a2.91 2.91 0 01-2.798 2.112H7.44a2.91 2.91 0 01-2.807-2.14L3.83 8.153 2.496 3.658l-.002-.009c-.165-.6-.32-1.162-.55-1.581-.221-.407-.399-.48-.559-.48H.794A.794.794 0 010 .793zm5.369 6.974l.795 2.899c.158.574.68.973 1.276.973h6.295a1.323 1.323 0 001.272-.96l1.839-6.447H4.323l1.031 3.48.015.055zm3.627 8.636a2.117 2.117 0 11-4.233 0 2.117 2.117 0 014.233 0zm-1.587 0a.529.529 0 10-1.058 0 .529.529 0 001.058 0zm8.995 0a2.117 2.117 0 11-4.235 0 2.117 2.117 0 014.235 0zm-1.588 0a.53.53 0 10-1.058 0 .53.53 0 001.058 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
