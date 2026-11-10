// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, test } from 'vitest'
import { CoffeeOrder } from './CoffeeOrder.jsx'

afterEach(cleanup)

test('при открытии показывает стоимость одной чашки', () => {
  render(<CoffeeOrder />)

  const total = screen.getByRole('status', { name: 'Стоимость заказа' })
  expect(total).toHaveTextContent(/^150 ₽$/)
})

test('после добавления чашки показывает стоимость двух чашек', async () => {
  const user = userEvent.setup()
  render(<CoffeeOrder />)

  const addButton = screen.getByRole('button', { name: 'Добавить чашку' })
  await user.click(addButton)

  const total = screen.getByRole('status', { name: 'Стоимость заказа' })
  expect(total).toHaveTextContent(/^300 ₽$/)
})
