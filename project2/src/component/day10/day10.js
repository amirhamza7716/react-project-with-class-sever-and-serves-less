// import { createStore, combineReducers } from 'redux';


// function studentReducer() {

//     let data =  ["ali", "ahmed", "rameez"];

//     return {users:data};

// }

// function teacherReducer() {

//     let data =  ["sultan", "furqan", "jutt"];

//     return {users:data};

// }

// let allReducers = combineReducers({studentReducer, teacherReducer})

// const myStore = createStore(allReducers);


// export default myStore;

// ******************



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




// ******************




// import React, { useState, useEffect } from 'react';
// import nSTore from './store/store'
// import { Provider } from 'react-redux';

// import List from './myList'

// export default function App(props) {

//     return <div>
//         <Provider store={nSTore}>


//             <List />

//         </Provider>


//     </div>

// }