import React from 'react';
import { connect } from 'react-redux';


  function Dashboard(props) {

       return<div>
        <h1>Dashboard</h1>
        <button onClick={(evt)=>{
          props.history.push("/addform");
        }}>CreateAdd</button>    
   </div> }
   let newTable = connect((store) => {

      return {
        myUsers:store.BankusersAccount
      };
        })(Dashboard)


export default newTable;