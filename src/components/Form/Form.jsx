import { useState } from "react";

export const Form = ({onSubmitted = (form)=>{}}) => {
    const [form, setForm] = useState({
        title: ""
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

        resetForm();

        onSubmitted(form);
    }

    return (
        <section>
            <form action="" onSubmit={handleSubmit}>
                <input name="title" type="text" value={form.title} onChange={handleChange} />
                <button type="submit">Agregar Tarea</button>
            </form>
        </section>
    )
}
