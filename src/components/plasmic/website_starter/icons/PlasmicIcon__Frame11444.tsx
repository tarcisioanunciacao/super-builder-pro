// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame11444IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame11444Icon(props: Frame11444IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.516 6.127v2.938c0 3.758 1.768 7.354 4.713 9.763H4.805V20h10.547v-1.172h-2.726a9.79 9.79 0 004.425-7.595c1.271-.085 2.949-.516 2.949-1.78a3.52 3.52 0 00-3.516-3.515 3.52 3.52 0 00-3.515 3.515c0 1.254 1.649 1.687 2.908 1.778a8.651 8.651 0 01-4.847 7.152A43.821 43.821 0 0013.006 5.71c1.05-.09 2.346-.474 2.346-1.531a2.933 2.933 0 00-2.93-2.93 2.933 2.933 0 00-2.93 2.93c0 1.056 1.293 1.44 2.342 1.531a42.65 42.65 0 01-1.842 12.06 16.155 16.155 0 01-1.086-5.802v-1.234c.84-.097 1.758-.44 1.758-1.28A2.346 2.346 0 008.32 7.108a2.346 2.346 0 00-2.343 2.344c0 .841.918 1.184 1.757 1.281v1.234c0 1.95.339 3.902.987 5.743-2.526-2.184-4.034-5.348-4.034-8.646V6.127c1.47-.086 3.516-.562 3.516-2.025A4.106 4.106 0 004.102 0 4.106 4.106 0 000 4.102C0 5.565 2.045 6.04 3.516 6.127zM14.14 9.453a2.346 2.346 0 012.343-2.344 2.346 2.346 0 012.344 2.344c0 .182-.821.628-2.344.628-1.522 0-2.343-.446-2.343-.628zm-3.477-5.292a1.76 1.76 0 011.758-1.74 1.76 1.76 0 011.758 1.74c-.095.127-.695.404-1.758.404-1.063 0-1.664-.277-1.758-.404zM8.32 9.595c-.618 0-1.032-.13-1.169-.221a1.174 1.174 0 012.339 0c-.138.09-.551.221-1.17.221zM4.102 1.172a2.933 2.933 0 012.93 2.93c0 .354-1.142.87-2.93.87-1.789 0-2.93-.516-2.93-.87a2.933 2.933 0 012.93-2.93z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame11444Icon;
/* prettier-ignore-end */
