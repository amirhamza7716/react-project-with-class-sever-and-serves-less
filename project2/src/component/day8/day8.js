//import React,{useState} from 'react';
//import BankApp from './component/day5/bank'
//import Bankkhudh from './component/day5/bankkhudh1'
//import FoodApplication from './component/day6/sirwork6'
//import YoutubeAdd from './component/day7/youtube'
//import FoodApplication from './component/day6/day6'
//import {BrowserRouter,Route,Link} from 'react-router-dom'
//import "./app1.css"
//export default function(){
 // return 
  // <div>
        
  //         <BrowserRouter>
  //        <Route exact path="/" render={() => {
  //           return <div>
  //             <h1>hello home</h1>
  //              <div class="button">
  //        <Link to="/youtube"><button class="bar">YOUTUBE</button></Link>
  //        <Link to="/Food"><button class="bar">FOOD WEBS</button></Link></div>
  //           </div>
  //       }} />
  //        {/* <div class="button">
  //        <Link to="/youtube"><button class="bar">YOUTUBE</button></Link>
  //        <Link to="/Food"><button class="bar">FOOD WEBS</button></Link></div> */}
  //       <Route path="/Food" component={FoodApplication}/>
  //        <Route path="/youtube" component={YoutubeAdd}/>
      
  // </BrowserRouter> 
   
  //     </div>

//}


import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';
//import { func } from 'prop-types';

function Login(props) {

    let [user, setUser] = useState({});

    function onChange(evt) {

        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        });

    }

    return <div>
        <form>
            <div>
                <input name="email" onChange={onChange} placeholder="email" type="email" />
            </div>
            <div>
                <input name="password" onChange={onChange} placeholder="password" type="password" />
            </div>
            <div>
                <button onClick={(evt) => {

                    evt.preventDefault();

                    let targetUser = props.users.find((aUser) => {

                        if (aUser.email == user.email && aUser.password == user.password) {
                            return true;
                        }

                    });

                    if (targetUser) {

                        alert("mil gya");
                        props.history.push("/dashboard");

                    } else {
                        alert("nahi mila user");
                    }

                }}>Login</button>
            </div>
        </form>
    </div>

}

function Signup(props) {

    let [user, setUser] = useState({});

    function onChange(evt) {

        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        });

    }

    return <div>

        <form>
          
            <div>
                <input name="name" onChange={onChange} placeholder="Name" type="text" />
            </div>
            <div>
                <input name="email" onChange={onChange} placeholder="email" type="email" />
            </div>
            <div>
                <input name="password" onChange={onChange} placeholder="password" type="password" />
            </div>
            <div>
                <button onClick={(evt) => {

                    evt.preventDefault();

                    props.onDataAdded(user)

                }}>Signup</button>
            </div>

        </form>
    </div>

}

function Dashboard() {

    return <div>
        <h1>Hello user</h1>
    </div>;

}
function Result(props) {
  return <div>
      <h1>{props.match.params.province}</h1>
      <h1>{props.match.params.city}</h1>
      <h1>{props.match.params.institute}</h1>
  </div>;
}
// function Home() {
//     return <Link to="/signup">I am new user</Link>;
// }

export default function App(props) {

    let [users, setUsers] = useState([]);

    function onDataAdded(user) {
        setUsers([...users, user]);
    }

    return <BrowserRouter>


        {/* <Signup users={users} /> */}

        <Route exact path="/" render={() => {

            return <>
                <h1>Hello g</h1>
                <Link to="/signup">I am new user</Link>
                &nbsp;&nbsp;<Link to="/login">Existing user</Link>
            </>

        }} />



        <Route path="/signup" render={() => {
            return <Signup users={users} onDataAdded={onDataAdded} />
        }} />

        <Route path="/login" render={(props) => {
            return <Login {...props} users={users} />
        }} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/result/:province/:city/:institute" component={Result} />
    </BrowserRouter>

}