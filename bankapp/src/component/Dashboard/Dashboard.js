import React from 'react';
import { connect } from 'react-redux';


  function Dashboard(props) {

       return<div>
        <h1>Dashboard</h1>
        <table border="1">
            {
                props.myUsers.users.map((user) => {

                    return <tr>
                    <td>{user.myamount}</td>
                    <td>0</td>
                    <td><button>WITHDRAW</button></td>
                    <td><button>ADDAMOUNT</button></td>
                    </tr>

                })
            }
        </table>
          
   </div> }
   let newTable = connect((store) => {

      return {
        myUsers:store.BankusersAccount
      };


        })(Dashboard)


export default newTable;