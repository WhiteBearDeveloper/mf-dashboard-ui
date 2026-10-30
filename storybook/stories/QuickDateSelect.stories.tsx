import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";
import { QuickDateSelect } from "@components/QuickDateSelect/QuickDateSelect";
import { getDashboardDate } from "@utils/date";

const meta = {
  title: "UI/Inputs/QuickDateSelect",
  component: QuickDateSelect,
  args: {
    value: getDashboardDate(),
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <QuickDateSelect
        {...args}
        value={value}
        onChange={nextValue => updateArgs({ value: nextValue })}
      />
    );
  },
} satisfies Meta<typeof QuickDateSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Today: Story = {};

export const Tomorrow: Story = {
  args: {
    value: getDashboardDate(1),
  },
};

export const DayAfterTomorrow: Story = {
  args: {
    value: getDashboardDate(2),
  },
};
