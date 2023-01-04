import React from "react";
import { Link } from "react-router-dom";


const Layout = (props) => {
    // console.log(props)
    return (
        <>
            <header>
                {/* <a href="/profile">Profile</a> */}
                {/* <a href="/dashboard">Dashboard</a> */}
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/hooks">Hooks</Link>

            </header>
            <div>{props.children}</div>
            <footer>&copy; edureka 2022</footer>
        </>




    )
}

export default Layout