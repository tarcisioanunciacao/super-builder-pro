// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame11Icon(props: Frame11IconProps) {
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
          "M5.872 0l1.664 3.582 3.921.476-2.893 2.689.76 3.876-3.452-1.92-3.451 1.92.76-3.876-2.894-2.69 3.922-.475L5.872 0zM20.99 0l1.664 3.582 3.922.475-2.893 2.69.76 3.876-3.452-1.92-3.452 1.92.76-3.876-2.893-2.69 3.921-.475L20.991 0zm15.12 0l1.663 3.582 3.921.476-2.893 2.689.76 3.876-3.452-1.92-3.451 1.92.76-3.876-2.894-2.69 3.922-.475L36.108 0zm15.118 0l1.553 3.734 4.032.324-3.072 2.63.938 3.935-3.451-2.108-3.452 2.108.938-3.934-3.071-2.631 4.032-.324L51.227 0zm15.118 0l1.664 3.582 3.92.476-2.892 2.689.76 3.876-3.452-1.92-3.451 1.92.76-3.876-2.894-2.69 3.922-.475L66.346 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame11Icon;
/* prettier-ignore-end */
