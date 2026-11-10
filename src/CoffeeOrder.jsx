import { useState } from 'react'
import { calculateTotal } from './calculateTotal.js'

const PRICE_PER_CUP = 150

export function CoffeeOrder() {
  const [quantity, setQuantity] = useState(1)
  const total = calculateTotal(PRICE_PER_CUP, quantity)

  return (
    <main className="order">
      <header>
        <p className="lesson">6.1 · Основы тестирования</p>
        <h1>Заказ кофе</h1>
        <p className="description">Добавьте чашку и посмотрите, как изменится сумма.</p>
      </header>

      <dl className="details">
        <div>
          <dt>Цена за чашку</dt>
          <dd>{PRICE_PER_CUP} ₽</dd>
        </div>
        <div>
          <dt>Чашек в заказе</dt>
          <dd>{quantity}</dd>
        </div>
        <div className="total">
          <dt>Итого</dt>
          <dd>
            <output aria-label="Стоимость заказа">{total} ₽</output>
          </dd>
        </div>
      </dl>

      <button type="button" onClick={() => setQuantity((current) => current + 1)}>
        Добавить чашку
      </button>
    </main>
  )
}
