import type { DashboardDate } from "@whitebeardeveloper/contracts";

export interface CalendarInputProps {
  value: DashboardDate;
  onChange: (value: DashboardDate) => void;
  minDate?: Date;
  maxDate?: Date;
}
