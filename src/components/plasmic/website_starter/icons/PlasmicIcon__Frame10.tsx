// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame10Icon(props: Frame10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.872 0l1.664 3.582 3.921.476-2.893 2.689.76 3.876-3.452-1.92-3.451 1.92.76-3.876-2.894-2.69 3.922-.475L5.872 0zM20.99 0l1.664 3.582 3.921.475-2.893 2.69.76 3.876-3.452-1.92-3.451 1.92.76-3.876-2.893-2.69 3.92-.475L20.99 0zm15.119 0l1.664 3.582 3.92.476-2.892 2.689.76 3.876-3.452-1.92-3.452 1.92.76-3.876-2.893-2.69 3.921-.475L36.11 0zm15.118 0l1.554 3.734 4.031.323-3.071 2.632.938 3.934-3.452-2.108-3.451 2.108.938-3.934-3.071-2.632 4.031-.323L51.227 0zm15.119 0l1.664 3.582 3.92.476-2.892 2.689.76 3.876-3.452-1.92-3.452 1.92.76-3.876-2.893-2.69 3.921-.475L66.346 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame10Icon;
/* prettier-ignore-end */
