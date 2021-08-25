
import './App.css';

// import React, { useState, useEffect } from 'react';
// import nSTore from './store/store'
// import { Provider } from 'react-redux';

// import List from './component/day11/day11'

// export default function App(props) {

//     return <div>
//         <Provider store={nSTore}>


//             <List />

//         </Provider>


//     </div>

// }
// import React, { useState, useEffect } from 'react';
// import nSTore from './store/store'
// import { Provider } from 'react-redux';

// import List from './component/day11/day11'
// import Table from './component/day11/2'

// export default function App(props) {

//     let city = "FSD";

//     return <div>
//         <Provider store={nSTore}>

//             {/* <div>
//               <input id="one"/>
                
//                 <button onClick={() => {

//                     nSTore.dispatch({
//                         type: "ADDING_STUDENT",
//                         city: "FSD",
//                         myName: document.getElementById('one').value
//                     });
//                 }}>Add data</button>

// </div> */}
// {/* <div>

//                 <input id="name" type="text" placeholder="Enter the name"/>
//                 <input  id="email" type="text" placeholder="Enter the email"/>
//                 <input id="password" type="password" placeholder="Enter the password"/>
//                 <button onClick={()=>{
//                    nSTore.dispatch({
//                     type:"Singup",
//                    myobject:{ myname:document.getElementById('name').value,
//                     myemail:document.getElementById('email').value,
//                     mypassword:document.getElementById('password').value}
//                   })
//                 }}>signup</button>
//             </div> */}
//             <div>

// <input id="name" type="text" placeholder="Enter the name"/>
// <input  id="email" type="text" placeholder="Enter the email"/>
// <input id="password" type="password" placeholder="Enter the password"/>
// <button onClick={()=>{
//    nSTore.dispatch({
//     type:"Singup",
//    myobject:{ myname:document.getElementById('name').value,
//     myemail:document.getElementById('email').value,
//     mypassword:document.getElementById('password').value}
//   })
// }}>signup</button>
// </div>

//             <List />
//           <Table/>
//         </Provider>

//     </div>;

// }









import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
export default function App(props) {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);
  let [use,setuse]=useState([]);
  async function onSubmit(data){
    setuse([...use,data]);
    let response = await axios.post('/signup',data).then((res)=>{
      console.log(res.data)
    
    })
    console.log(response)
    
    
      }
///////////////////////////////////////////////
      let [login,setlogin]=useState([]);
  async function onlogin(data){
    setlogin([...login,data]);
    let response = await axios.post('/login',data).then((res)=>{
      console.log(res.data)
    
    })
    console.log(response)
    
    
      }
     
      function Display(props){
        return <table border="1">
            <tr>
                <td>
                     <h1>Name</h1></td>
                    <td><h1>Email</h1></td>
                    <td><h1>Password</h1></td>
                    
                </tr>
               {use.map((u)=>{
                 return <tr>
                   <td>{u.name}</td>
                   <td>{u.email}</td>
                   <td>{u.password}</td>
                 </tr>
               })}
                
        </table>
        }

        function Logindisplay(props){
          return <table border="1">
              <tr>
                  <td>
                       <h1>COMENT1</h1></td>
                      <td><h1>COMENT2</h1></td>
                      <td><h1>IMAGE</h1></td>
                      
                  </tr>
                 {login.map((u)=>{
                   return <tr>
                    
                     <td>{u.Email}</td>
                     <td>{u.Password}</td>
                   </tr>
                 })}
                  
          </table>
          }
        
  
  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
                <input Name="name" placeholder="Name" ref={register({ required: true,maxLength: 20 })} type="text" />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <input Name="email" placeholder="email" type="text" ref={register({ required: true })}  />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <input Name="password" placeholder="Password" ref={register({ required: true })
                } type="text" />
                {errors.password && <span>This field is required</span>}
            </div>
            <div>
              <button 
              // onClick={() => {
              //   fetch("http://www.localhost:7070/login")
              // }}
              >
            
               
                submit</button>
            </div>
  </form>
  <div>{Display()} </div>
  
  
  <div>
  <form onSubmit={handleSubmit(onlogin)}>
            <div>
                <input Name="Email" placeholder="email" type="text" ref={register({ required: true })}  />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <input Name="Password" placeholder="Password" ref={register({ required: true })
                } type="text" />
                {errors.password && <span>This field is required</span>}
            </div>
            <div>
              <button> submit</button>
            </div>
  </form>
  </div>
  <div>{Logindisplay()} </div>
  </div>
}
