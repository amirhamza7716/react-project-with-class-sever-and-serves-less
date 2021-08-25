
import './App.css';
import React from 'react';
import nSTore from './store/store'
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Table from './component/Data/Data'
//import Signup from './component/signup/signup'


export default function App(props) {

   

    return <div>
        <Provider store={nSTore}>
        <BrowserRouter>
          <Route exact path="/" render={() => {
          return <>
          <h1>Header</h1>
          <Link to="/signup"><button>Create account</button></Link>
          &nbsp;&nbsp;<Link to="/login"><button>Login Account</button></Link>
          &nbsp;&nbsp;<Link to="/table"><button>ALL USER</button></Link>
          &nbsp;&nbsp;<Link to="/dashboard"></Link>
          </>

          }} />
          <Route path="/signup" render={() => {
            return <div>
            <input id="name" type="text" placeholder="Enter the name"/>
            <input  id="email" type="text" placeholder="Enter the email"/>
            <input id="password" type="password" placeholder="Enter the password"/>
            <input id="amount" type="text" placeholder="Enter the Amount"/>
            <button onClick={()=>{
              nSTore.dispatch({
                type:"Singup",
                myobject:{ myname:document.getElementById('name').value,
                myemail:document.getElementById('email').value,
                mypassword:document.getElementById('password').value,
                myamount:document.getElementById('amount').value
              }
                })
            }}>signup</button>
          </div>
          }} />

          <Route path="/login" render={(props) => {
            return <div>
            <input  id="email" type="text" placeholder="Enter the email"/>
            <input id="password" type="password" placeholder="Enter the password"/>
            <button onClick={()=>{
              nSTore.dispatch({
                type:"Login",
                props,
                myobject:{
                myemail:document.getElementById('email').value,
                mypassword:document.getElementById('password').value},
                
                })
            }}>Login</button>
          </div>
          }} />
          
          <Route path="/table" render={() => {
            return <Table/>
        }} />
           <Route path="/dashboard" component={ Dashboard}/>
          </BrowserRouter>
        </Provider>

    </div>;

}



