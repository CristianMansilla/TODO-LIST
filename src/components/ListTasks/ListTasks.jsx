export const ListTasks = ({tasks, renderTask}) => {
    return (
        <section>
            {tasks.map((task) => {
                return (
                    renderTask(task)
                )
            })}
        </section>
    )
}
