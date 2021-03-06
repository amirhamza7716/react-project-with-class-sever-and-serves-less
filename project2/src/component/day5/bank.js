import React,{useState} from 'react'
export default function BankApp(props) {


    let [accounts, setAccounts] = useState([]);

    let [signupData, setSignUpData] = useState({});
    let [signinData, setSigninData] = useState({});


    let [showSignUpForm, setShowSignUpForm] = useState(false);
    let [showSignInForm, setShowSignInForm] = useState(false);


    // signupData = {
    //     name :"waqas",
    //     password:23232,
    //     balance:100
    // }

    function setValue(evt) {

        setSignUpData({
            ...signupData,
            [evt.target.id]: evt.target.value
        });

    }

    function setLoginValue(evt) {

        setSigninData({
            ...signupData,
            [evt.target.id]: evt.target.value
        });

    }

    return <div>
        <h1>National Bank of Pakistan</h1>
        <button onClick={() => {

            setShowSignUpForm(!showSignUpForm);

        }}>Create New Account</button>

        <button onClick={() => {

            setShowSignInForm(!showSignInForm);

        }}>Login</button>

        {showSignUpForm == true ? <div id="signupForm">
            <div>
                <input id="name" placeholder="Name" onChange={setValue} type="text" />
            </div>
            <div>
                <input id="password" placeholder="Password" onChange={setValue} type="text" />
            </div>
            <div>
                <input id="balance" placeholder="Balance" onChange={setValue} type="text" />
            </div>
            <button onClick={() => {

                setAccounts([...accounts, signupData])
                setShowSignUpForm(false);

            }}>Add User</button>
        </div> : null}

        {showSignInForm == true ? <div>
            <div>
                <input id="name" placeholder="Name" onChange={setLoginValue} type="text" />
            </div>
            <div>
                <input id="password" placeholder="Password" onChange={setLoginValue} type="text" />
            </div>
            <button onClick={() => {

                let myAccount = accounts.find((account) => {

                    if (account.name == signinData.name && account.password == signinData.password) {
                        return true;
                    }

                });


                if (myAccount) {
                    setShowSignInForm(false);
                    alert("user found");
                } else {
                    alert("nahi mila!");
                }

            }}>Login</button>
        </div> : null}
    </div>;

}
