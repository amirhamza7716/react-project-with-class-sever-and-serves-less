import React,{useState} from 'react'

function MenuItem(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td><input checked={props.ordered} onChange={(evt) => {

            props.onOrderUpdate(evt.target.checked, props.index);



        }} type="checkbox" /></td>
        <td>
            <input value={props.qty} onChange={(evt) => {

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
            name: "Raita",
            price: 50
        },
        {
            name: "Haleem",
            price: 260,

        }
    ])

    function onQtyUpdate(qty, index) {

        dishes[index].qty = qty;

        if(dishes[index].name == "Biryani"){
            findRaitaAndUpdate(true, dishes[index].qty);            
        }

        setDishes([...dishes]);        

    }

    function findRaitaAndUpdate(state, qty){

         let riataDish = dishes.find((dish)=>{
            return dish.name == "Raita";
         });

         riataDish.ordered = state;
         riataDish.qty = qty;

    }

    function onOrderUpdate(ordered, index) {

        dishes[index].ordered = ordered;

        if(dishes[index].name == "Biryani" && ordered == true){
            findRaitaAndUpdate(true, dishes[index].qty);
            // dishes[5].ordered = true;
        }

        setDishes([...dishes])

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

    // let [one, setOne] = useState(1);
    // let [two, setTwo] = useState(1);

    // useEffect(()=>{

    //     console.log("i changed")

    // }, [one]);

    return <div>


        <table border="1">
            {
                dishes.map((dish, index) => {
                    return <MenuItem qty={dish.qty} ordered={dish.ordered} onQtyUpdate={onQtyUpdate} index={index} onOrderUpdate={onOrderUpdate} name={dish.name} price={dish.price} />
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
                   DISCOUNT
                </td>
                <td>
                    {disCount}
                </td>
            </tr>
        </table>
    </div>

}