import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { FlexRow } from "@components/FlexRow/FlexRow";
import { SurfaceBlock } from "@components/SurfaceBlock/SurfaceBlock";

const meta = {
  title: "UI/Layout/FlexRow",
  component: FlexRow,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FlexRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Responsive: Story = {
  render: () => (
    <FlexRow>
      <SurfaceBlock>Выручка: 1 240 000 ₽</SurfaceBlock>
      <SurfaceBlock>Заказы: 284</SurfaceBlock>
      <SurfaceBlock>Средний чек: 4 366 ₽</SurfaceBlock>
    </FlexRow>
  ),
};
