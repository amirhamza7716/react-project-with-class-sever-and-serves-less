import React from 'react';
import nSTore from './store/store'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar,Nav, Form, FormControl} from 'react-bootstrap';
import {BrowserRouter,Route,Link} from 'react-router-dom'
export default function App(props) {

  return <div>
    
     <BrowserRouter>
     <Provider store={nSTore}>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">OLX-Bootstrap-APP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/home"></Link>Home</Nav.Link>
      <Nav.Link><Link to="/signup">CREAT ACCOUNT</Link></Nav.Link>
      <Nav.Link href="/login">LOGIN</Nav.Link>
      <Nav.Link href="#link">ALL USERS ACCOUNT</Nav.Link>
      <Nav.Link href="#link">ALL USERS ADDS</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


<Route path="/signup" render={() => {
            return <div>
  <Form>
  <Form.Group controlId="formBasicName">
  <Form.Label>Name</Form.Label>
  <Form.Control type="text" placeholder="Enter the Name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={()=>{
              nSTore.dispatch({
                type:"Singup",
                myobject:{ myname:document.getElementById('formBasicName').value,
                myemail:document.getElementById('formBasicEmail').value,
                mypassword:document.getElementById('formBasicPassword').value,
                
              }
                })
            }}>
    Signup
  </Button>
</Form>
          </div>
          }} />

<Route path="/login" render={(props) => {
            return <div>
      <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit"  onClick={()=>{
              nSTore.dispatch({
                type:"Login",
                props,
                myobject:{
                myemail:document.getElementById('email').value,
                mypassword:document.getElementById('password').value}
                
                })
            }} >
    Login
  </Button>   
          </div>
          }} />
          </Provider>
</BrowserRouter>

  </div>
      }