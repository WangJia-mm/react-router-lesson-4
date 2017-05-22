import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home';
import User from './User';
import Profile from './Profile';

const App = () => (
    <Router>
        <div>
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <Link to="/">学生管理系统</Link>
                        </div>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/user">用户管理</Link></li>
                            <li><Link to="/profile">个人设置</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </div>
    </Router>
)
export default App