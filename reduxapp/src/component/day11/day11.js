// import React from 'react';
// import { connect } from 'react-redux';
// import { func } from 'prop-types';


// function List(props) {

//     return <div>
//         <h1>{props.teacherReducer.users[1]}</h1>

//     </div>

// }


// // function sum(a) {
// //     return function (b) {
// //         return a + b;
// //     }
// // }

// //  let res = sum(10);
// //  let myResult = res(5)

// export default connect(function (store) {

//     return store

// })(List)


import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

function List(props) {

    return <div>

        <ol>
            {
                props.myStudents.users.map((user) => {

                    return <li>{user}</li>

                })
            }
        </ol>
 

    </div>

}



let newList = connect((store) => {

    return {
        myStudents:store.studentReducer
    };


})(List)


export default newList;
