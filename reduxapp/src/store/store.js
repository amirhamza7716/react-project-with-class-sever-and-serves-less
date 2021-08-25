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

// import { createStore, combineReducers } from 'redux';

// let data3 = { users: [] };

// function studentrecordReducer(oldData = data3, newData) {

//     oldData = { ...oldData };

//     if (newData.type == "Singup") {
//         oldData.users.push(newData.myobject);
//         // oldData.users.push(newData.myname);
//         // oldData.users.push(newData. myemail);
//         //  oldData.users.push(newData.mypassword);

//     } else if (newData.type == "REMOVING_STUDENT") {
//         oldData.users.splice(newData.myobject);
//         // oldData.users.splice(newData.myname);
//         // oldData.users.splice(newData. myemail);
//         //  oldData.users.splice(newData.mypassword);

//     }

//     return oldData;

// }


// // let data1 = { users: ["ali", "ahmed", "rameez"] };
// // function studentReducer(oldData = data1, newData) {

// //     oldData = { ...oldData };

// //     if (newData.type == "ADDING_STUDENT") {

// //         oldData.users.push(newData.myName);

// //     } else if (newData.type == "REMOVING_STUDENT") {

// //         oldData.users.splice(newData.myName);

// //     }

// //     return oldData;

// // }


// // let data2 = { users: ["sultan", "furqan", "jutt"] };

// // function teacherReducer(oldData = data2, newData) {

// //     oldData = { ...oldData };

// //     if (newData.type == "ADDING_TEACHER") {

// //         oldData.users.push(newData.myName);

// //     } else if (newData.type == "REMOVING_TEACHER") {

// //         oldData.users.splice(newData.myName);

// //     }

// //     return oldData;

// // }

// let allReducers = combineReducers({ studentReducer, teacherReducer,studentrecordReducer })

// const myStore = createStore(allReducers);

// export default myStore;