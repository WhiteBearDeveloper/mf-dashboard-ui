import { Label, Select } from "radix-ui";
import styles from "./SelectField.module.scss";

export interface SelectFieldOption {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  label: string;
  selectedValue?: string;
  options: SelectFieldOption[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SelectField = ({
  selectedValue,
  options,
  onChange,
  label,
  placeholder,
}: SelectFieldProps) => {
  return (
    <Label.Root className={styles.field}>
      <span className={styles.label}>{label}</span>

      <Select.Root
        value={selectedValue ?? ""}
        onValueChange={nextValue => {
          const selectedOption = options.find(
            option => option.value === nextValue,
          );

          if (selectedOption) {
            onChange(selectedOption.value);
          }
        }}
      >
        <Select.Trigger className={styles.select} type="button">
          <Select.Value placeholder={placeholder} />

          <Select.Icon className={styles.icon} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m4.5 6 3.5 3.5L11.5 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={styles.content}
            position="popper"
            sideOffset={6}
          >
            <Select.Viewport className={styles.viewport}>
              {options.map(option => (
                <Select.Item
                  key={option.value}
                  className={styles.item}
                  value={option.value}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>

                  <Select.ItemIndicator className={styles.itemIndicator}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m3.5 8 3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </Label.Root>
  );
};
