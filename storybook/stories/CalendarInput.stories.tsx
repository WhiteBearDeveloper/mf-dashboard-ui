import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";
import { CalendarInput } from "@components/CalendarInput/CalendarInput";

const meta = {
  title: "UI/Inputs/CalendarInput",
  component: CalendarInput,
  args: {
    value: "2026-10-31",
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <CalendarInput
        {...args}
        value={value}
        minDate={new Date(2026, 9, 25)}
        maxDate={new Date(2026, 10, 5)}
        onChange={nextValue => updateArgs({ value: nextValue })}
      />
    );
  },
} satisfies Meta<typeof CalendarInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoundedDateRange: Story = {};
