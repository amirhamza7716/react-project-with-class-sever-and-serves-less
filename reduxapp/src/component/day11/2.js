import React from 'react';
import { connect } from 'react-redux';

function Table(props) {

    return <div>

        <table border="1">
            {
                props.myStudents.users.map((user) => {

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
        myStudents:store.studentrecordReducer
    };


})(Table)


export default newTable;