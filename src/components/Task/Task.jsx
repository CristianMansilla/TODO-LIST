export const Task = ({title, completed}) => {
    return (
        <div>
            <p>
                <span>{title}</span>
                <span>{completed ? "Completada ✅" : "Pendiente ⛔"}</span>
            </p>
        </div>
    )
}
