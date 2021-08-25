import React from 'react';
import { connect } from 'react-redux';

function Table(props) {

    return <div>

        <table border="1">
            {
                props.myUsers.users.map((user) => {

                    return <tr>
                    <td>{user.myname}</td>
                    <td>{user.myemail}</td>
                    <td>{user.mypassword}</td>
                    <td>{user.myamount}</td>
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