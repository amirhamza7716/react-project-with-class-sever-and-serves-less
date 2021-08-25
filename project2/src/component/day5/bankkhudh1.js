import React, { useState } from 'react'
export default function Bankkhudh(props){
   let[displaysignupform,setdisplaysignupform]=useState(false);
   let[displaysigninform,setdisplaysigninform]=useState(false);
   let[displaydashboard,setdisplaydashboard]=useState(false);
   let [signupData, setSignUpData] = useState({});


   function setValue(evt) {

    setSignUpData({
        ...signupData,
        [evt.target.id]: evt.target.value
    });

}

    return <div>
        <h1>Allied Bank of Pakistan</h1>

        <div>
        <button onClick={()=>{
          setdisplaysignupform(!displaysignupform);
        }}>Create Account</button>
        <button onClick={()=>{
            setdisplaysigninform(!displaysigninform);
        }}>Login</button>
        </div>


       {displaysignupform==true ? <div id="signupform">
        <div>
        <input id="name" placeholder="Enter name"/>
        </div>
        <div>
        <input id="password" placeholder="Enter password"/>
        </div>
        <div>
        <input id="income"  placeholder="Enter income"/>
        </div>
        <div>
        <button onClick={()=>{
            setdisplaysignupform(false);
        }}>Add User</button>
        </div>
        </div> :null}



        {displaysigninform==true ? <div id="signinform">
        <div>
        <input id="name" placeholder="Enter name"/>
        </div>
        <div>
        <input id="password" placeholder="Enter password"/>
        </div>
        <div>
        <button onClick={()=>{
            setdisplaysigninform(false);
             //setdisplaydashboard(displaydashboard);

        }}>submit</button>
        </div>
        </div> :null}

        {/* {displaydashboard==true ? <div id="dashboard">
            <h1>Dashboard</h1>
        <button>income</button>
        </div>:null}  */}

    </div>
}