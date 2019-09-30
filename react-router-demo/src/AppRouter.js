import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'
import Home from './pages/home'
import Video from './pages/video'
function AppRouter() {
    return (
        <Fragment>
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                        <Link to="/list/123">列表页面</Link>
                        <Link to="/video/">video</Link>
                    </li>
                </ul>

                <Route path="/" exact component={Index} />
               
                <Route path="/list/:id" component={List} />
                
                <Route path="/home/" component={Home}/>
                <Route path="/video/" component={Video}/>
            </Router>
           
        </Fragment>

    )
}

export default AppRouter