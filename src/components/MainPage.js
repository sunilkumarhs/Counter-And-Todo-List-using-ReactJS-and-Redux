import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const movecounter = () =>{
    navigate('/Counter');
  }

  const moveTodo = ()  => {
    navigate('/Todos');
  }
  return (
    <div className='main'>
      <div>
        <motion.h1 
          initial={{y:1000}}
          animate={{y:0}}
          transition={{type:"circle", duration:1}}
        >WELCOME TO REACT JS AND REDUX APPLICATION
        </motion.h1>
        
        <div className='block'>
          <p>To move to Counter Page </p>
          <motion.button
           whileHover={{scale:1.1}}
           whileTap={{scale:1}} 
          className='btn btn-primary' onClick={movecounter}
          >Click-Here</motion.button>
          <p>To move to Todo List Page </p>
          <motion.button 
           whileHover={{scale:1.1}}
           whileTap={{scale:1}}
          className='btn btn-info' onClick={moveTodo}
          >Click-Here</motion.button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
