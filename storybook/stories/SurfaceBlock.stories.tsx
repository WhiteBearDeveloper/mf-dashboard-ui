import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SurfaceBlock } from "@components/SurfaceBlock/SurfaceBlock";

const meta = {
  title: "UI/SurfaceBlock",
  component: SurfaceBlock,
} satisfies Meta<typeof SurfaceBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Пример содержимого SurfaceBlock",
  },
};

export const WithCustomClassName: Story = {
  args: {
    children: "SurfaceBlock с пользовательским классом",
    className: "custom-surface",
  },
};
