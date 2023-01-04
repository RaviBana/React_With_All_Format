import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import PrivateRoute from './PrivateRoute'
import NotFound from '../Pages/NotFound'
import Counter from '../withoutClassComponent/Counter'
import Hooks from '../component/hooks/hooks'
// import Counter from '../P/Counter'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/profile" component={Profile} />
                {/* <PrivateRoute path="/counter" component={Counter} /> */}
                <PrivateRoute path="/counter" component={Counter} />
                <PrivateRoute path="/hooks" component={Hooks}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default AppRoute;