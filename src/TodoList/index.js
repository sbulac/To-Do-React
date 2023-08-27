function TodoList({ children }) {
    return (
        <ul className="w-screen flex flex-col items-center gap-4 overflow-y-scroll h-[23rem] relative py-4 md:h-[35rem]">{children}</ul>
    )
}

export default TodoList