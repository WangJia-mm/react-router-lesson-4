import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>个人主页</h2>
    </div>
)

const User = () => (
    <div>
        <h2>用户管理</h2>
    </div>
)

const Profile = ({match}) => (
    <div>
        <h3>{match.params.userId}</h3>
    </div>
)

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/user">用户管理</Link></li>
                <li><Link to="/profile">个人设置</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router>
)
export default App