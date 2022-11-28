import React, { useState} from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos } from '../redux/TodoSlice';
import {AnimatePresence, motion} from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
  };
};
const Todos = (props) => {
    const [todo, setTodo] = useState("");
   
    const handleChange = (e) => {
      setTodo(e.target.value);
    };

    const add = () => {
      if(todo === "") {
        alert("Input box is empty");
      } else {
        props.addTodo({
          id: Math.floor(Math.random()*1000),
          item: todo,
          completed: false,
        }) 
        setTodo("");
      }
    }
    console.log("props from store",props);
  return (
    <div>
      <div className='Todo'>
        <div className='container'>
          <motion.h1 
          initial={{y:-200}}
          animate={{y:0}}
          transition={{type:"spring", duration:0.5}}
          whileHover={{scale: 1.1}}
          >Todo List Application</motion.h1>
          {/* <button className='btn btn-success' onClick = {profileHandler}>Go-to-Profile</button> */}
          <motion.form
          initial={{y:1000}}
          animate={{y:0}}
          transition={{type:"spring", duration:1}}
          className='insert' onSubmit={e=>e.preventDefault()}>
          <motion.label  whileHover={{scale: 1.1}} htmlFor='inputTodo'>New Todo</motion.label> 
          <motion.input
            whileHover={{scale:1.1}}
            className='form-control form-control-lgxt' id='inputTodo' //ref={todoitem} 
            onChange={(e) =>handleChange(e)}
            value={todo} type="text"  placeholder="Add item"
            />
            <motion.button 
            whileHover={{scale:1.1}}
            whileTap={{scale:1}}
            className='btn btn-primary' onClick={() => add()}
            >Insert</motion.button>
          </motion.form>
          {/* todolist */}
          <div className='alltodos'>
            <AnimatePresence>
              {props.todos.list.map((item) => { 
              return (<motion.div 
                initial={{x:"150vw",transition:{type:"spring", duration:2},}}
                animate={{x:0, transition:{type:"spring", duration:2},}}
                whileHover={{
                  scale:0.9,
                  transition:{type:"spring", duration:0.1},
                }}
                exit={{
                  x:"-60vw",
                  scale:[1,0],
                }}
              key={item.id}>
              <div
              className='singletodo'>
                <p className='todotext'>{item.item}</p>
                <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:1}}
                className='btn btn-danger' onClick = {() => props.removeTodo(item.id)}
                >Delete</motion.button>
              </div>
              </motion.div>);})} 
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

