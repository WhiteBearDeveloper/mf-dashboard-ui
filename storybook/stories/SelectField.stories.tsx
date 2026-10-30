import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useArgs } from "storybook/preview-api";
import { SelectField } from "@components/SelectField/SelectField";

const meta = {
  title: "UI/Inputs/SelectField",
  component: SelectField,
  args: {
    label: "Период",
    placeholder: "Выберите период",
    selectedValue: "",
    options: [
      { label: "Сегодня", value: "today" },
      { label: "Завтра", value: "tomorrow" },
      { label: "Послезавтра", value: "dayAfterTomorrow" },
    ],
  },
  render: function Render(args) {
    const [{ selectedValue }, updateArgs] = useArgs();

    return (
      <SelectField
        {...args}
        selectedValue={selectedValue}
        onChange={value => updateArgs({ selectedValue: value })}
      />
    );
  },
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selectedValue: "tomorrow",
  },
};
