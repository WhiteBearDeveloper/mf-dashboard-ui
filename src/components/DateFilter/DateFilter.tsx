import { CalendarInput } from "#components/CalendarInput/CalendarInput";
import { QuickDateSelect } from "#components/QuickDateSelect/QuickDateSelect";
import type { CalendarInputProps } from "#types/Calendar";
import { FlexRow } from "#components/FlexRow/FlexRow";
import styles from "./DateFilter.module.scss";

export type DateFilterProps = CalendarInputProps;

export function DateFilter({ value, onChange, ...restProps }: DateFilterProps) {
  return (
    <FlexRow className={styles.filter} role="group" aria-label="Фильтр по дате">
      <CalendarInput value={value} onChange={onChange} {...restProps} />
      <QuickDateSelect value={value} onChange={onChange} />
    </FlexRow>
  );
}
