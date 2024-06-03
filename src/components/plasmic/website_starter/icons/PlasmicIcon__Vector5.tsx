// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 .52A.52.52 0 01.52 0h.39c.66 0 1.055.444 1.281.856.15.275.26.594.345.883a.894.894 0 01.07-.003h8.68c.577 0 .994.552.835 1.107l-1.27 4.451a1.91 1.91 0 01-1.836 1.387H4.883A1.91 1.91 0 013.04 7.276l-.528-1.925-.875-2.95v-.006c-.11-.394-.21-.763-.362-1.038-.145-.267-.262-.315-.367-.315H.521A.52.52 0 010 .52zm3.524 4.578l.521 1.903a.87.87 0 00.838.638h4.131a.868.868 0 00.835-.63l1.207-4.23H2.837l.677 2.282.01.037zm2.38 5.668a1.39 1.39 0 11-2.778 0 1.39 1.39 0 012.778 0zm-1.042 0a.347.347 0 10-.694 0 .347.347 0 00.694 0zm5.904 0a1.39 1.39 0 11-2.779 0 1.39 1.39 0 012.779 0zm-1.042 0a.347.347 0 10-.695 0 .347.347 0 00.695 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
