import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const User = () => (
    <div>
        <h2>用户管理</h2>
    </div>
)

const Profile = () => (
    <div>
        <h3>个人设置</h3>
    </div>
)

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
                <div className="row">
                    <div className="col-md-12">
                        <Route exact path="/" component={Home}/>
                        <Route path="/user" component={User}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)
export default App