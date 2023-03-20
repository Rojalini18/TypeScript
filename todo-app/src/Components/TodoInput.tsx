interface TodoinputProps {
    handleAdd: (title: string) => void
    setInputValue: (value: string) => void
    value: string
}
const TodoInput = ({ handleAdd, setInputValue, value }: TodoinputProps) => {
    const changeHandler: React
        .ChangeEventHandler<HTMLInputElement> = (e) => {
            setInputValue(e.target.value)
        }
    const handleAddClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        handleAdd(value)
        setInputValue("")
    }
    return (
        <div>
            <input type={"text"} value={value} onChange={changeHandler} />
            <button onClick={handleAddClick}>Add</button>
        </div>
    )
}

export default TodoInput;