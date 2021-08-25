import React from 'react';
import { connect } from 'react-redux';

function Table(props) {

    return <div>

        <table border="1">
        <tr>
        <td>
            <h1>Name</h1></td>
            <td><h1>Email</h1></td>
            <td><h1>Password</h1></td>
        </tr>
            {
                props.myUsers.users.map((user) => {

                    return <tr>
                    <td>{user.myname}</td>
                    <td>{user.myemail}</td>
                    <td>{user.mypassword}</td>
                    
                    </tr>

                })
            }
        </table>
       
                

            
        
        </div>

}
let newTable = connect((store) => {

    return {
        myUsers:store.BankusersAccount
    };


})(Table)


export default newTable;