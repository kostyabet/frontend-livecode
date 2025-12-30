// Создай форму регистрации с полями: email и password.
// Используй useState для хранения значений.
// Добавь валидацию:
//  email должен содержать "@",
//  password — минимум 6 символов.
// Показывай ошибки под полями и кнопку "Submit", которая активна только если форма валидна.
import { useState, useEffect } from 'react';

export const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            return 'Email needs containce "@"';
        }
        return '';
    };

    const validatePassword = (password) => {
        if (password.length < 6) {
            return 'Password min lenght is 6 symbols!';
        }
        return '';
    };

    useEffect(() => {
        const isEmailValid = !validateEmail(email);
        const isPasswordValid = !validatePassword(password);
        setIsFormValid(isEmailValid && isPasswordValid);
    }, [email, password]);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value));
    };

    return (
        <form>
            <h1>Registration form</h1>
            <label>
                Email
                <input name="email" onChange={handleEmailChange}/>
                {emailError && <span>{emailError}</span>}
            </label>
            <label>
                Password
                <input name="pass" onChange={handlePasswordChange}/>
                {passwordError && <span>{passwordError}</span>}
            </label>
            <button type="submit" disabled={isFormValid}>Submit</button>
        </form>
    )
}