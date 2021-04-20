import React,{Component} from 'react';
import {HashRouter,Route}from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './ui/buttons/index'
export default class IRouter extends Component{

    render(){
        return(
            <HashRouter>
                    <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>{
                       return <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons} />
                        </Admin>
                    }} />
                    </App>
            </HashRouter>
        )
    }
}