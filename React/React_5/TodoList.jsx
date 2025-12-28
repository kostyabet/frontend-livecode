// Создай компонент TodoList, который отображает массив задач (hardcoded).
// Добавь input для поиска, который фильтрует список по тексту задачи в
//  реальном времени с помощью useState и фильтрации массива.
import { useState, useEffect } from 'react';

export const TodoList = ({
    data = []
}) => {
    const [search, setSearch] = useState('');

    const filteredTodos = data.filter(todo =>
        todo.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input name="search" onChange={(e) => setSearch(e.target.value)}/>
            {filteredTodos.map((row) => 
                <div key={row.id}>
                    <h1>{row.name}</h1>
                </div>
            )}
        </>
    )
}