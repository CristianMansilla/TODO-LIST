import { useState } from "react"
import { Task } from "../Task/Task";
import { Form } from "../Form/Form";
import { Title } from "../Title/Title";
import { ListTasks } from "../ListTasks/ListTasks";

export const ToDo = () => {
    const [tasks, setTasks] = useState([]);

    //Luego de la "=>" va los "()" para evitar poner el return de la función.
    const createTask = (title) => ({
        id: window.crypto.randomUUID(),
        title: title,
        completed: false
    });

    const addTask = (form) => {
        const newTask = createTask(form.title);

        setTasks([...tasks, newTask]);
    }

    const completeTask = (id) => {
        //Se evita la mutación de los elementos originales al hacer una copia profunda de los mismos
        const draft = structuredClone(tasks);
        const task = draft.find((task) => task.id === id);
        task.completed = !task.completed;
        setTasks(draft);
    }

    const deleteTask = (id) => {
        const newTask = tasks.filter((task) => task.id != id);
        setTasks(newTask);
    }

    return (
        <>
            <Title><h1>TODO-LIST</h1></Title>

            {/* Si recibe el mismo parametro y se envia el mismo, se puede omitir*/}
            {/* Esta forma de trabajar es util para lidiar con el tema de las dependencias */}
            {/* <Form onSubmitted={(form)=>{addTask(form)}}></Form> */}
            <Form onSubmitted={addTask}></Form>

            <ListTasks
                tasks={tasks} 
                renderTask={(task) => {
                    return(
                        <Task key={task.id} title={task.title} completed={task.completed} onCompleted={() => { completeTask(task.id) }} onDeleted={() => { deleteTask(task.id) }}></Task>
                    )
                }}
            >

            </ListTasks>
        </>
    )
}
