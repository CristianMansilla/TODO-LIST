import { useState } from "react"
import { Task } from "../Task/Task";

export const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState({
        title: ""
    });

    //Luego de la "=>" va los "()" para evitar poner el return de la función.
    const createTask = (title) => ({
        id: window.crypto.randomUUID(),
        title: title,
        completed: false
    });

    const resetForm = () => {
        setForm({
            title: "",
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = createTask(form.title);

        setTasks([...tasks, newTask]);

        resetForm();
    }

    return (
        <>
            <section>
                <h1>TODO-LIST</h1>
            </section>

            <section>
                <form action="" onSubmit={handleSubmit}>
                    <input name="title" type="text" value={form.title} onChange={handleChange} />
                    <button type="submit">Agregar Tarea</button>
                </form>
            </section>

            <section>
                {tasks.map((task) => {
                    return (
                        <Task key={task.id} title={task.title} completed={task.completed}></Task>
                    )
                })}

            </section>
        </>
    )
}
