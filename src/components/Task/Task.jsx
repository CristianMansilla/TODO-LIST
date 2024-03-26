export const Task = ({title, completed, onDeleted = ()=>{}, onCompleted = ()=>{}}) => {

    const handleDeleted = () =>{
        onDeleted();
    }

    const handleCompleted = () =>{
        onCompleted();
    }

    return (
        <div>
            <p>
                <span>{title}</span>
                <span>{completed ? "Completada ✅" : "Pendiente ⛔"}</span>
            </p>
            <div>
                <button onClick={handleCompleted}>{completed ? "No lista⛔" : "Listo✅"}</button>
                <button onClick={handleDeleted}>❌</button>
            </div>
        </div>
    )
}
