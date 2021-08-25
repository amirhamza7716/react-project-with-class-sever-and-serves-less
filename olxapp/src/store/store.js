import { createStore, combineReducers } from 'redux';
let data3 = { users: [] };
function BankusersAccount(oldData = data3, action) {

    oldData = { ...oldData };
   
    if (action.type == "Singup") {
        oldData.users.push(action.myobject);
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
    else if (action.type =="form") {
    
         oldData.users.push(action.myobject);
     }
    return oldData;

}


let data2 = { userss: [] };

function AddsReducer(oldData = data2, newData) {

    oldData = { ...oldData };

    if (newData.type == "Form") {

        oldData.userss.push(newData.myobject);

    }else if(newData.type=="Delet"){
       
                oldData.userss.splice(newData.myobject,1)
    }else if(newData.type=="Edit"){
       
        oldData.userss.splice(newData.myobject,1)
        newData.props.history.push("/editform");
}
       // oldData.userss.splice(newData.myobject,1);}
    

    return oldData;

}
let allReducers = combineReducers({BankusersAccount,AddsReducer})

const nStore = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default nStore;