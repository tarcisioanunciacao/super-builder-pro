// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.876 4.719a.411.411 0 00-.298-.124H8.749C8.401 2.98 7.582 0 6.24 0 5.197 0 4.452 1.341 4.08 2.31c-.274-.348-.646-.646-1.168-.646-.943 0-1.763 1.863-2.136 2.93H.43a.4.4 0 00-.323.15.445.445 0 00-.1.348l1.044 6.06c.149.794.844 1.39 1.639 1.39h4.793c.92 0 1.664-.745 1.664-1.663V7.103h6.383a.435.435 0 00.423-.422.419.419 0 00-.423-.422H9.146v-.845h9.935c-.1.249-.273.472-.497.646a.407.407 0 00-.174.273.5.5 0 00.05.323.41.41 0 00.571.124A2.085 2.085 0 0020 5.017c0-.124-.025-.224-.124-.298zM2.888 2.509c.422 0 .77.72.844.968.05.174.223.273.397.273a.425.425 0 00.398-.298C4.825 2.384 5.57.844 6.216.844c.447 0 1.192 1.739 1.639 3.75h-6.21c.448-1.092.994-2.036 1.243-2.085zm5.439 8.345a.838.838 0 01-.845.844H2.69a.848.848 0 01-.82-.695l-.1-.572h1.54a.435.435 0 00.423-.422.435.435 0 00-.422-.422H1.62l-.15-.844h1.84a.435.435 0 00.422-.423.435.435 0 00-.422-.422H1.323l-.15-.844H3.31a.435.435 0 00.422-.423.435.435 0 00-.422-.422H1.025l-.15-.844h5.788v5.017c0 .223.198.422.422.422a.435.435 0 00.422-.422V5.414h.845v5.44h-.025zm9.289-4.173a.419.419 0 01-.422.422.435.435 0 01-.423-.422c0-.223.199-.422.422-.422.249 0 .423.199.423.422z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
