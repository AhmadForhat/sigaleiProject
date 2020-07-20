import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home/index.tsx'
import Cadastro  from './pages/Cadastro/index.tsx'
import Login from './pages/Login/index.tsx'
import Navbar from './components/Navbar/index.tsx'
import Dashboard from './pages/Dashboard/index.tsx'
import NotFound from './pages/NotFound/index.tsx'
import Logout from './pages/Logout/index.tsx'


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
                    <Logout />
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