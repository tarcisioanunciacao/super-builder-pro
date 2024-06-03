// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.982 9.67a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6zm0-4.072a1.272 1.272 0 110 2.545 1.272 1.272 0 010-2.545zm0 10.69a2.8 2.8 0 100 5.598 2.8 2.8 0 000-5.598zm0 4.072a1.273 1.273 0 110-2.546 1.273 1.273 0 010 2.546z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.315.008h-.009a6.915 6.915 0 00-.66 0C5.673.181 0 6 0 12.978c0 7.097 5.552 12.792 12.64 12.97h.003c.114.006.223.011.337.011.115 0 .224-.005.335-.01 7.091-.175 12.646-5.873 12.646-12.97 0-6.98-5.673-12.798-12.646-12.97zM1.527 12.978c0-6.157 5.005-11.291 11.2-11.445.085-.004.168-.008.253-.008.086 0 .17.004.277.01a5.344 5.344 0 01-.277 10.68 6.88 6.88 0 00-6.872 6.872 7.002 7.002 0 00.052.803 7.094 7.094 0 00.21 1.069l.037.135c.058.19.124.375.197.558.016.04.034.078.051.117a7.095 7.095 0 00.28.581c.07.13.144.258.222.382l.08.128c.018.026.033.054.05.08-3.46-1.96-5.76-5.671-5.76-9.962zm11.72 11.445a5.344 5.344 0 11-.267-10.681 6.88 6.88 0 006.873-6.872c0-.207-.012-.41-.03-.613l-.02-.182a7.036 7.036 0 00-.065-.434 6.916 6.916 0 00-.161-.694l-.016-.064a6.83 6.83 0 00-.197-.559l-.059-.137a6.974 6.974 0 00-.192-.414l-.071-.139a6.863 6.863 0 00-.276-.472l-.017-.03c-.009-.012-.016-.026-.024-.039 3.404 2 5.709 5.706 5.709 9.886 0 6.262-4.9 11.289-11.187 11.444z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
