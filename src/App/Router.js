import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home'
import Cadastro  from './pages/Cadastro'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'


export default function App() {
    const navbarArray = [{title:'Login', href:'/login'},{title:'Cadastre-se', href:'/cadastro'}]
    const navbarArrayLogado = [{title:'Logout', href:'/config/logout'}]
    const isLogged = localStorage.getItem('isLogged')
    // Private Routes
    if(isLogged) return (
        <Router>
            <>
            <Switch>
                <Route exact path="/">
                    <Navbar links={navbarArrayLogado}/>
                    <Dashboard />
                </Route>
                <Route exact path="/:repo?">
                    <Navbar links={navbarArrayLogado}/>
                    <Dashboard />
                </Route>
                <Route exact path="/config/logout">
                    <>
                    <Navbar links={navbarArrayLogado}/>
                    <>
                    <h2 style={{marginTop:'100px'}}>Deseja sair da página?</h2>
                    <a href='/' onClick={() => {
                        localStorage.removeItem('isLogged')
                        localStorage.removeItem('email')
                        localStorage.removeItem('userGithub')
                        }}>Logout</a>
                    </>
                    </>
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
          </>
        </Router>
    )
    // Public Routes
    return (
        <Router>
            <>
            <Switch>
                <Route exact path="/">
                    <>
                    <Navbar links={navbarArray}/>
                    <Home />
                    </>
                </Route>
                <Route exact path="/cadastro">
                    <>
                    <Navbar links={navbarArray}/>
                    <Cadastro />
                    </>
                </Route>
                <Route exact path="/login">
                    <>
                    <Navbar links={navbarArray}/>
                    <Login />
                    </>
                </Route>
                <Route path="*">
                        <NotFound />
                </Route>
            </Switch>
            </>
        </Router>
    )
}