// Создай компонент Timer, который отображает таймер и кнопку.
// Используй useState для хранения значения таймера.
// Добавь кнопку "Reset", которая сбрасывает таймер на 0.
import { useState, useEffect } from 'react';

export const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let timerRef = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timerRef);
    }, []);

    const reset = () => setTimer(0);

    return (
        <>
            <h1>Timer</h1>
            <span>{timer}</span>
            <button onClick={reset}>Reset</button>
        </>
    )
}