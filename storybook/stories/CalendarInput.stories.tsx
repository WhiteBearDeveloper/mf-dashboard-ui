import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";
import { addDays, startOfDay, subDays } from "date-fns";
import { getDashboardDate } from "@utils/date";
import { CalendarInput } from "@components/CalendarInput/CalendarInput";

const storyToday = startOfDay(new Date());
const minStoryDate = subDays(storyToday, 6);
const maxStoryDate = addDays(storyToday, 5);

const meta = {
  title: "UI/Inputs/CalendarInput",
  component: CalendarInput,
  args: {
    value: getDashboardDate(),
    onChange: () => undefined,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <CalendarInput
        {...args}
        value={value}
        onChange={nextValue => updateArgs({ value: nextValue })}
      />
    );
  },
} satisfies Meta<typeof CalendarInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoundedDateRange: Story = {
  args: {
    minDate: minStoryDate,
    maxDate: maxStoryDate,
  },
};

export const Unbounded: Story = {};

export const MinDateOnly: Story = {
  args: {
    minDate: minStoryDate,
  },
};

export const MaxDateOnly: Story = {
  args: {
    maxDate: maxStoryDate,
  },
};
