import React from "react"
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

const AppRouterMain = ()=>{

    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/users">
                    <button>Users</button>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    {/* users가 없으므로 "http://rootUrl/users" 입력하면 NotFound가 호출됨*/}
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    )
}

export default AppRouterMain