import classNames from "classnames";
import type { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./FlexRow.module.scss";

export type FlexRowProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export const FlexRow = ({
  children,
  className,
  ...restProps
}: FlexRowProps) => {
  return (
    <div {...restProps} className={classNames(styles.flexRow, className)}>
      {children}
    </div>
  );
};
