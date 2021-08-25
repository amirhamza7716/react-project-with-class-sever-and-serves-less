import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import nSTore from 'E:/git start/react/project1/OLXAPP/olxapp/src/store/store'

function Display(props) {
    return <div>
 <Provider store={nSTore}>
        <table border="1">
        <tr>
        <td>
             <h1>COMENT1</h1></td>
            <td><h1>COMENT2</h1></td>
            <td><h1>IMAGE</h1></td>
            
        </tr>
            {
                props.myUsers.userss.map((user, index) => {

                    return <tr>
                   
                    <td id="f">{user.myaddname}</td>
                    <td id="g">{user.myadddiscription}</td>
                    <td id="h"><img src={user. myaddimg} /></td>
                    <td><button onClick={()=>{
              nSTore.dispatch({
                type:"Delet",
                myobject:{index}
                })
            }}>Deletadd</button></td>
             <td><button onClick={()=>{
              nSTore.dispatch({
                type:"Edit",
                props,
                myobject:{index}
                })
            }}>Edit</button></td>
                    </tr>

                })
            }
        </table>
        
        </Provider>
        </div>

}
let newTable = connect((store) => {

    return {
        myUsers:store.AddsReducer
    };


})(Display)


export default newTable;