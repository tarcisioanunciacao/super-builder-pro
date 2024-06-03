// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.857 5.427a.473.473 0 00-.343-.143H10.061C9.661 3.427 8.72 0 7.177 0c-1.2 0-2.057 1.542-2.485 2.656-.315-.4-.743-.742-1.343-.742-1.085 0-2.028 2.142-2.456 3.37h-.4a.46.46 0 00-.371.171.512.512 0 00-.115.4l1.2 6.97c.171.913.971 1.599 1.885 1.599h5.513a1.914 1.914 0 001.913-1.914V8.17h7.34a.5.5 0 00.486-.486.48.48 0 00-.485-.485h-7.34v-.971h11.424a1.8 1.8 0 01-.571.742.468.468 0 00-.2.314.572.572 0 00.057.372.472.472 0 00.657.142A2.398 2.398 0 0023 5.77c0-.143-.029-.257-.143-.343zM3.321 2.885c.485 0 .885.828.97 1.114.058.2.258.314.458.314s.4-.143.457-.343C5.548 2.742 6.406.971 7.148.971c.514 0 1.371 2 1.885 4.313h-7.14c.514-1.257 1.142-2.342 1.428-2.4zm6.255 9.597a.963.963 0 01-.971.97H3.092a.976.976 0 01-.942-.799l-.115-.657h1.771a.5.5 0 00.486-.485.5.5 0 00-.486-.486H1.864l-.171-.971h2.113a.5.5 0 00.486-.486.5.5 0 00-.486-.485H1.521l-.171-.971h2.456a.5.5 0 00.486-.486.5.5 0 00-.486-.485H1.178l-.17-.972h6.654v5.77a.5.5 0 00.486.486.5.5 0 00.485-.486V6.227h.971v6.255h-.028zm10.682-4.799c0 .257-.2.486-.485.486a.5.5 0 01-.486-.486.5.5 0 01.486-.485.48.48 0 01.485.485z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
