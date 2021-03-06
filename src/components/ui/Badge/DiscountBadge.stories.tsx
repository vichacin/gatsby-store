import { DiscountBadge } from '.'
import type { DiscountBadgeProps } from './DiscountBadge'

export default {
  component: DiscountBadge,
  title: 'Molecules/Badge/DiscountBadge ⚠️',
}

const TemplateDiscount = ({ ...args }: DiscountBadgeProps) => (
  <DiscountBadge {...args} />
)

export const Discount = TemplateDiscount.bind({})

Discount.args = {
  big: false,
  listPrice: 45,
  spotPrice: 40,
}
