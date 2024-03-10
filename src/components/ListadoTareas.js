import Tarea from './Tarea';

export default function ListadoTareas({ todos, onEliminar }) {
    return (
        <>
            {todos.length ? <hr /> : null}
            <ul>
                {todos.map(todo => (
                    <Tarea key={todo} todo={todo} onEliminar={onEliminar} />
                ))}
            </ul>
        </>
    );
}