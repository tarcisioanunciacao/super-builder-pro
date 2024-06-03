// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
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
          "M1.105 7.832a.585.585 0 00.448-.003l1.753-.74a.586.586 0 00-.456-1.08l-.428.182a8.398 8.398 0 0115.82 1.277.586.586 0 101.133-.294 9.57 9.57 0 00-18.05-1.396l-.198-.469a.586.586 0 00-1.08.456l.74 1.752c.06.143.175.257.319.315zm18.849 6.284l-.74-1.752a.586.586 0 00-.767-.312l-1.753.74a.586.586 0 10.456 1.079l.49-.207a8.398 8.398 0 01-15.88-1.132.586.586 0 00-1.134.293A9.57 9.57 0 0018.7 14.163l.173.409a.586.586 0 101.08-.456z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.825 16.45a.582.582 0 00.65-.178l4.909-5.938a.586.586 0 00-.452-.96h-2.135v-5.31a.586.586 0 00-1.038-.374L5.851 9.626a.586.586 0 00.451.96h2.136v5.312c0 .247.155.468.387.552zM7.547 9.414l3.078-3.723v4.27c0 .323.262.586.586.586h1.476L9.61 14.27V10a.586.586 0 00-.586-.586H7.547z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
