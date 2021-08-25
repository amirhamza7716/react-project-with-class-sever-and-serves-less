import React,{useState} from 'react'



function MenuItem(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td><input onChange={(evt) => {

            props.onOrderUpdate(evt.target.checked, props.index);



        }} type="checkbox" /></td>
        <td>
            <input onChange={(evt)=>{

                props.onQtyUpdate(evt.target.value, props.index);

            }} type="number" placeholder="qty" />
        </td>
    </tr>
}

export default function FoodApplication(props) {

    let [totalBill, setTotalBill] = useState(0);
    let [disCount,setdisCount]=useState(0);

    let [dishes, setDishes] = useState([
        {
            name: "Biryani",
            price: 150,            

        },
        {
            name: "Daal Mash",
            price: 130,
            
        },
        {
            name: "Chicken Jalfrezi",
            price: 300
        },
        {
            name: "Qorma",
            price: 200
        },
        {
            name: "Haleem",
            price: 260,

        },
        {
            name: "Raita",
            price: 50
        }
    ])

    function onQtyUpdate(qty, index) {

        dishes[index].qty = qty;
        // setDishes([...dishes])

        // console.log(evt.target.checked);

    }

    function onOrderUpdate(ordered, index) {

        dishes[index].ordered = ordered;
        // setDishes([...dishes])

        // console.log(evt.target.checked);

    }

    function orderDishes() {

        let totalBIll = 0;
        let discount =0;

        dishes.forEach((dish) => {
            

            if (dish.ordered) {
               
                totalBIll += dish.price * (dish.qty || 1);
                if(totalBIll > 500){
                  //  totalBIll=totalBIll-((totalBIll*10)/100); 
                  discount=(totalBIll*10)/100;
                  totalBIll=totalBIll-discount;
                }
            }

        });

        setTotalBill(totalBIll);
        setdisCount(discount);

    }

    return <div>
        <table border="1">
            {
                dishes.map((dish, index) => {
                    return <MenuItem onQtyUpdate={onQtyUpdate} index={index} onOrderUpdate={onOrderUpdate} name={dish.name} price={dish.price} />
                })
            }
            <tr>
                <td>
                    <button onClick={orderDishes}>Order dishes</button>
                </td>
                <td>
                    {totalBill}
                </td>
                <td>
                    {disCount}
                </td>
            </tr>
        </table>
    </div>

}


// export default function UserList(props) {

//     let [users, setUsers] = useState([
//         { name: "hamza", city: "FSD" },
//         { name: "rameez", city: "KHI" },
//         { name: "umar" },
//         { name: "umar" },
//         { name: "khurram" }
//     ])

//     let [searchText, setSearchText] = useState("");

//     let [selected, setSelected] = useState(null);


//     return <div>


//         <ol>            
//             {
//                 users.map((user, index) => {

//                     return <li className={user.name[0] == searchText ? "selected" : ""} onClick={(evt)=>{

//                         setSelected(user);

//                         // users.splice(index, 1);
//                         setUsers([...users]);

//                     }}>{user.name} {user.city}

//                      <button onClick={(evt)=>{

//                          let userPrompt = prompt("Enter chracter to find");

//                             // users.find((user)=>{
//                             //     if(user.name[0] == userPrompt){
//                             //         user.abc = "selected"
//                             //     }else{
//                             //         user.abc = "";
//                             //     }
//                             // })
//                             // setUsers([...users]);

//                           setSearchText(userPrompt);


//                     }}>FInd</button></li>

//                 })
//             }
//         </ol>





//         {/* <table border="1">
//             <Student abc={sayHello} name={value} city="FSD" />
//             <Student name="Fraz" city="LHR" roll="20" />
//         </table> */}



//     </div>

// }
