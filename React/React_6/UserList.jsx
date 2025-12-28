// Создай компонент UserList, который при монтировании fetches список пользователей из публичного API
//  (например, jsonplaceholder.typicode.com/users) с помощью fetch и useEffect.
// Отобрази их имена в списке.
// Добавь индикатор загрузки.
import { useState, useEffect } from 'react';

export const UserList = ({
    fetches
}) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setUsers(data);
            } catch(e) {
                console.error(e);
                setUsers([]);
            } finally {
                setIsLoading(false);
            }
        }

        getUsers();
    }, []);

    return (
        <>
            {isLoading && <span>Loading data...</span>}
            {users.map(user => {
                <div id={user.id}>
                    <h1>{user.name}</h1>
                </div>
            })}
        </>
    )
}