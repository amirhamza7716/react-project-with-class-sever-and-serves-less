import { createStore, combineReducers } from 'redux';

let data3 = { users: [] };



function BankusersAccount(oldData = data3, action) {

    oldData = { ...oldData };

    if (action.type == "Singup") {
        oldData.users.push(action.myobject);
    } else if (action.type == "REMOVING_STUDENT") {
        oldData.users.splice(action.myobject);
    } else if (action.type =="Login") {
        let targetuser= oldData.users.find((user) => {
         if(action.myobject.myemail == user.myemail && action.myobject.mypassword == user.mypassword){
           return true;
          }});
         if (targetuser) {

            alert("mil gya");
            action.props.history.push("/dashboard");
          
        } else {
            alert("nahi mila user");
        }
    }

    return oldData;

}
// let a = [];
// function Dashboard(myamount) {

//     //seta(myamount);
//     a.push(myamount)
// }


let allReducers = combineReducers({ BankusersAccount})

const nStore = createStore(allReducers);

export default nStore;