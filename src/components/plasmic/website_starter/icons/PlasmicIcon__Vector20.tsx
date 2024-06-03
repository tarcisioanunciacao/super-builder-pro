// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 1.2A1.2 1.2 0 011.2 0h.893c1.52 0 2.432 1.022 2.952 1.973.347.633.598 1.368.795 2.033C5.893 4.002 5.947 4 6 4h19.997a2 2 0 011.923 2.549l-2.925 10.254a4.4 4.4 0 01-4.23 3.194h-9.517a4.4 4.4 0 01-4.243-3.235l-1.216-4.436L3.773 5.53l-.002-.013c-.25-.907-.483-1.757-.832-2.39-.334-.617-.603-.727-.845-.727H1.2A1.2 1.2 0 010 1.2zm8.117 10.544l1.201 4.382a2.004 2.004 0 001.93 1.47h9.517a2 2 0 001.923-1.45l2.78-9.746H6.535l1.558 5.26.023.084z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
