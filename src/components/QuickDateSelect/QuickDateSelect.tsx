import type { DashboardDate } from "@whitebeardeveloper/contracts";
import { getDashboardDate } from "#utils/date";
import { SelectField } from "#components/SelectField/SelectField";

export interface QuickDateSelectProps {
  value: DashboardDate;
  onChange: (value: DashboardDate) => void;
}

export function QuickDateSelect({ value, onChange }: QuickDateSelectProps) {
  const options = [
    { label: "Сегодня", value: getDashboardDate() },
    { label: "Завтра", value: getDashboardDate(1) },
    { label: "Послезавтра", value: getDashboardDate(2) },
  ];

  const selectedValue = options.find(option => option.value === value)?.value;

  return (
    <SelectField
      placeholder="Выберите день"
      label="Быстрый выбор"
      onChange={onChange}
      options={options}
      selectedValue={selectedValue}
    />
  );
}
