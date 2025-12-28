// Создай функциональный компонент UserCard, который принимает props: name, age и isAdmin.
// Отобрази имя и возраст, а если isAdmin true — добавь бейдж "Admin".
// Используй условный рендеринг для показа сообщения "Access denied", если возраст меньше 18.

export const UserCard = ({
    name = "",
    age = 0,
    isAdmin = false,
}) => {
    if (age < 18) return (
        <div>
            <span>Access denied</span>
        </div>
    )

    return (
        <div>
            <h3>{name}</h3>
            <h4>Age: {age}</h4>
            {isAdmin && <span>Admin</span>}
        </div>
    );
}