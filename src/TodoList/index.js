function TodoList({ children }) {
    return (
        <ul className="w-screen flex flex-col items-center gap-4 justify-center">{children}</ul>
    )
}

export default TodoList