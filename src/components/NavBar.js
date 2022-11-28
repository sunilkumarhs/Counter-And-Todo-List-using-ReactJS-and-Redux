import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div>
        <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link to='/'><button className="nav-link active" id="v-pills-mainpage-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mainpage" type="button" role="tab" aria-controls="v-pills-mainpage" aria-selected="true">Main Page</button></Link>
            <Link to='/Counter'><button className="nav-link active" id="v-pills-counter-tab" data-bs-toggle="pill" data-bs-target="#v-pills-counter" type="button" role="tab" aria-controls="v-pills-counter" aria-selected="true">Counter</button></Link>
            <Link to='/Todos'><button className="nav-link active" id="v-pills-todos-tab" data-bs-toggle="pill" data-bs-target="#v-pills-todos" type="button" role="tab" aria-controls="v-pills-todos" aria-selected="true">TodoList</button></Link>
        </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar
