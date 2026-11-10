import { expect, test } from 'vitest'
import { calculateTotal } from './calculateTotal.js'

test('считает стоимость трёх чашек по 150 ₽', () => {
  const total = calculateTotal(150, 3)

  expect(total).toBe(450)
})
