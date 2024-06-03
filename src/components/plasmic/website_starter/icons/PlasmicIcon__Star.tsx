// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M5.985 0l1.728 4.098 4.24.478-3.175 2.992.879 4.386-3.69-2.249L2.27 11.94l.895-4.383L0 4.551l4.243-.46L5.985 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
