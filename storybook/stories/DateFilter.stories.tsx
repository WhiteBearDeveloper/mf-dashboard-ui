import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";
import { addDays, startOfDay, subDays } from "date-fns";
import { DateFilter } from "@components/DateFilter/DateFilter";
import { getDashboardDate } from "@utils/date";

const storyToday = startOfDay(new Date());
const minStoryDate = subDays(storyToday, 6);
const maxStoryDate = addDays(storyToday, 5);

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
    minDate: minStoryDate,
    maxDate: maxStoryDate,
  },
};

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
