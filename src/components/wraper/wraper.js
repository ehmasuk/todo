import React, { useState } from "react";
import Todo from "../todo/todo";
import "./wraper.css";

import { v4 as uuidv4 } from "uuid";

const Wraper = () => {
    // all todos
    const [allTodo, setAllTodo] = useState([]);

    // input value
    const [singleTodo, setSigleTodo] = useState("");

    // dummy value
    const [dummyValue, setDummyValue] = useState([
        { todo: "Dummy todo...", id: 1 },
    ]);

    // inputs change handle
    const handleChange = (e) => {
        setSigleTodo(e.target.value);
    };

    // submit button click function
    const handleSubmit = (e) => {
        e.preventDefault();

        setAllTodo((old) => {
            return [...old, { todo: singleTodo, id: uuidv4() }];
        });

        setSigleTodo("");
        setDummyValue([]);
    };

    // delete function
    const handleRemove = (e) => {
        const id = e.id;

        setAllTodo((oldTodo) => {
            return oldTodo.filter((e) => e.id !== id);
        });
        setDummyValue([]);
    };

    return (
        <div className="wraper">
            <h4 className="mb-4">Add Todo</h4>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    onChange={handleChange}
                    value={singleTodo}
                    type="text"
                    placeholder="Add your new Todo"
                />
                <input type="submit" value="+" />
            </form>
            <div className="todo-wraper">
                {/* dummy todos */}
                {dummyValue.map((e) => (
                    <Todo key={uuidv4()} todo={e} handleRemove={handleRemove} />
                ))}

                {/* all todos rander from here */}
                {allTodo.map((e) => (
                    <Todo key={uuidv4()} todo={e} handleRemove={handleRemove} />
                ))}
            </div>
        </div>
    );
};

export default Wraper;
