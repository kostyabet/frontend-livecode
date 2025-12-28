// Создай компонент Counter, который отображает счётчик и две кнопки: "+" и "-".
// Используй useState для хранения значения счётчика.
// Добавь кнопку "Reset", которая сбрасывает счётчик на 0.
import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClickPlus = () => {
        setCount(prev => prev + 1);
    };

    const handleClickMinus = () => {
        setCount(prev => prev - 1);
    }

    const handleResetCounter = () => {
        setCount(0);
    }

    return (
        <div>
            <span>Current counter status: {count}</span>
            <div>
                <button onClick={handleClickPlus}>+</button>
                <button onClick={handleClickMinus}>-</button>
            </div>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    )
}