// Создай кастомный хук useLocalStorage, который хранит значение в localStorage и 
//  cинхронизирует его с состоянием (аналогично useState).
// Затем используй его в компоненте для хранения и отображения текста из input.

// Hook
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const getStoredValue = () => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState(getStoredValue);

    const setValue = (value) => {
        try {
            setStoredValue(value);
        
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === key) {
                try {
                    setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
                } catch (error) {
                    console.error(`Error parsing localStorage value for key "${key}":`, error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key, initialValue]);

    useEffect(() => {
        setStoredValue(getStoredValue());
    }, [key]);

    return [storedValue, setValue];
}

// Component
export const CustomInput = () => {
    const [value, setValue] = useLocalStorage('VALUE', '');

    return (
        <>
            <input name="value" onChange={(e) => setValue(e.target.value)} value={value}/>
        </>
    )
}