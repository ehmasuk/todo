import React, { useState } from "react";
import "./todo.css";

const Todo = (props) => {




    const [toggle,setToggle] = useState(false)



    return (
        <div className="todo">
            <p className={toggle && 'trash'}>
                <input className="mr-2" type="checkbox" onClick={()=>setToggle(!toggle)} />
                {props.todo.todo}
                <i onClick={()=>props.handleRemove(props.todo)} className="fas fa-trash ml-5"></i>
            </p>
        </div>
    );
};

export default Todo;
