import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";
import { DateFilter } from "@components/DateFilter/DateFilter";
import { getDashboardDate } from "@utils/date";

const meta = {
  title: "UI/DateFilter",
  component: DateFilter,
  args: {
    value: getDashboardDate(),
    onChange: () => undefined,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <DateFilter
        {...args}
        value={value}
        onChange={nextValue => updateArgs({ value: nextValue })}
      />
    );
  },
} satisfies Meta<typeof DateFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BoundedDateRange: Story = {
  args: {
    minDate: new Date(2026, 9, 25),
    maxDate: new Date(2026, 10, 5),
  },
};
