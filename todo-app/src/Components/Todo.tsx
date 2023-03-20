import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodoItem from './TodoItem';
import Todoinput from './TodoInput';
export interface TodoitemProps {
    id: number;
    title: string;
    status: boolean;
}

const Todos = () => {
    const [todos, setTodos] = useState<TodoitemProps[]>([])
    const [value, setValue] = useState<string>("")
    const handleAdd = (title: string) => {

        const payload =
        {
            title: title,
            status: false,
            id: Date.now()

        }
        axios.post("http://localhost:8080/todos", payload)
            .then((res: any) => {
                getTodos()
            })
    }

    const getTodos = () => {
        axios
            .get("http://localhost:8080/todos")
            .then((response: AxiosResponse<TodoitemProps[]>) => {
                const { data } = response;
                setTodos(data)
            })
    }

    const deleteTodo = (id: number) => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then((res: any) => {
                getTodos()
            })
    }

    const updateTodo = (todo: TodoitemProps) => {
        axios.patch(`http://localhost:8080/todos/${todo.id}`, { title: value })
            .then((res: any) => {
                getTodos()
            })
    }
    const toggleTodo = (todo: TodoitemProps) => {
        axios.patch(`http://localhost:8080/todos/${todo.id}`, { status: !todo.status })
            .then((res: any) => {
                getTodos()
            })
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <>
            <Header label='My Todo'></Header>
            <Todoinput value={value} setInputValue={setValue} handleAdd={handleAdd} />
            {todos.length > 0 && todos.map((todo) => {
                return <TodoItem handleDeleteTodo={deleteTodo} handleUpdateTodo={updateTodo} handleToggleTodo={toggleTodo}
                    key={todo.id} todo={todo} />
            })
            }
        </>
    )
}

export default Todos;