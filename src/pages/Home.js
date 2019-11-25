import React, { useState } from 'react';
import {
    Link,
    Redirect,
    // useHistory,
    useLocation
  } from "react-router-dom";

export default function Home(props) {
    const [state, setState] = React.useState({
        email: "",
        password: "",
      })
    
    //   render() {
    //     if (this.state.toDashboard === true) {
    //       return <Redirect to='/dashboard' />
    //     }
    
  
    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: state.email,
            password: state.password
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:3001/api/v1/auth/signin', options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                props.history.push("/feed");
            });

        // props.userHasAuthenticated(true);
        

    }
    function handleChange(e) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
    }
    return (
        <div className='home'>
            <div className='home-text' >
                <h1>Greene Teamwork App</h1>
                <p>
                Welcome to teamwork, great teams are powered by teamwork. Teamwork is all about collaboration, team building and excellent results. Get cranking.
                </p>
                <Link to='/feed'>
                <button >Get started today</button>
                </Link>
            </div>
            <form onSubmit={handleSubmit} className='home-form' 
                action='http://localhost:3001/api/v1/auth/signin'
                method='post'>
                <p>Signin</p>
                <label htmlFor="email">Email address</label>
                <br></br>
                <input 
                    placeholder="username@email.com" 
                    name="email" 
                    autoFocus
                    type="email"
                    value={state.email}
                    onChange={handleChange}
                    required 
                />
                <br></br>
                <label htmlFor="password">Password</label>
                <br></br>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    required 
                />
                <br></br>
                <button >start teamwork</button>
            </form>
            <footer>©2019 Greene Teamwork. All rights reserved.</footer>
        </div>
    )
}
