// import React from 'react';
// import { connect } from 'react-redux';
// import nSTore from 'E:/git start/react/project1/OLXAPP/olxapp/src/store/store'
// import { Provider } from 'react-redux';

//   function Form(props) {

//        return<div>
//         <h1>Enter the add</h1>
//         <Provider store={nSTore}>
//         <form>
//             <input id="name" type="text" placeholder="Enter the name"/>
//             <input  id="email" type="text" placeholder="Enter the email"/>
//             <input id="password" type="password" placeholder="Enter the password"/>
//             <button onClick={()=>{
//               nSTore.dispatch({
//                 type:"form",
//                 myobject:{ myname:document.getElementById('name').value,
//                 myemail:document.getElementById('email').value,
//                 mypassword:document.getElementById('password').value,
               
//               }
//                 })
//             }}>submit</button>
//           </form>
    
//         </Provider>
//    </div> }

//    let newTable = connect((store) => {

//       return {
//         myUsers:store.BankusersAccount
//       };


//         })(Form)


// export default newTable;