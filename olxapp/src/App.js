import './App.css';
import React from 'react';
import nSTore from './store/store'
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Dashboard from './camponent/dashboard/dashboard'
import Table from './camponent/data/data'
import Form from './camponent/addForm/form'
import Display from './camponent/display/display'
//import Signup from './component/signup/signup'


export default function App(props) {

  
   

    return <div id="header">
        <Provider store={nSTore}>
        <BrowserRouter>
          <Route exact path="/" render={() => {
          return <>
          <h1>Header</h1>
          <Link to="/signup"><button>Create account</button></Link>
          &nbsp;&nbsp;<Link to="/login"><button>Login Account</button></Link>
          &nbsp;&nbsp;<Link to="/table"><button>ALL USER</button></Link>
          &nbsp;&nbsp;<Link to="/display"><button>ALL Adds</button></Link>
          &nbsp;&nbsp;<Link to="/dashboard"></Link>
          &nbsp;&nbsp;<Link to="/addform"></Link>
          &nbsp;&nbsp;<Link to="/editform"></Link>
          </>

          }} />
          <Route path="/signup" render={() => {
            return <div>
            <input id="name" type="text" placeholder="Enter the name"/>
            <input  id="email" type="text" placeholder="Enter the email"/>
            <input id="password" type="password" placeholder="Enter the password"/>
              
            <button onClick={()=>{
              nSTore.dispatch({
                type:"Singup",
                myobject:{ myname:document.getElementById('name').value,
                myemail:document.getElementById('email').value,
                mypassword:document.getElementById('password').value,
                
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
                mypassword:document.getElementById('password').value}
                
                })
            }}>Login</button>
          </div>
          }} />
          
          <Route path="/table" render={() => {
            return <Table/>
        }} />
           <Route path="/dashboard" component={Dashboard}/>
           {/* <Route path="/addform" component={Form}/> */}
           <Route path="/addform" render={() => {
            return <div>
              <h1>ADDS FORM</h1> 
              <input id="a" type="text" placeholder="Enter the coments"/>
              <input  id="b" type="text" placeholder="Enter the description"/>
              <input id="c" type="file" name="user-image"/>
              
              <button onClick={()=>{
              nSTore.dispatch({
                type:"Form",
                props,
                myobject:{ myaddname:document.getElementById('a').value,
                myadddiscription:document.getElementById('b').value,
                myaddimg:URL.createObjectURL(document.getElementById('c').files[0]),
                
              }
                })
            }}>submit</button>
            </div>
        }}/>
        <Route path="/display" component={Display}/>
        <Route path="/editform" render={() => {
            return <div>
              <h1>ADDS FORM</h1> 
              <input id="a" type="text" placeholder="Enter the coments"/>
              <input  id="b" type="text" placeholder="Enter the description"/>
              <input id="c" type="file" name="user-image"/>
              
              <button onClick={()=>{
              nSTore.dispatch({
                type:"Form",
                props,
                myobject:{ myaddname:document.getElementById('a').value,
                myadddiscription:document.getElementById('b').value,
                myaddimg:URL.createObjectURL(document.getElementById('c').files[0]),
                
              }
                })
            }}>submit</button>
            </div>
        }}/>
          </BrowserRouter>

        </Provider>

    </div>

}