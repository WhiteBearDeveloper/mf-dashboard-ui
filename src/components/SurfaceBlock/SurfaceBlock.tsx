import classNames from "classnames";
import type { PropsWithChildren } from "react";
import styles from "./SurfaceBlock.module.scss";

export type SurfaceBlockProps = PropsWithChildren<{
  className?: string;
}>;

export const SurfaceBlock = ({ children, className }: SurfaceBlockProps) => {
  return (
    <div className={classNames(styles.surfaceBlock, className)}>{children}</div>
  );
};
