import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'; 
import {Home} from './Home';
import {Greet} from './Greet';
import {Customers} from './Customers';
import {Login} from './Login';
import Cars from './Cars';

const extraProps={name:'Murthy'}

export const Layout =()=> (
<div>
    <span>
        <Link className='nav' exact to='/'>Home </Link>
        <Link className="nav" exact to='/users'>Customers </Link>
        <Link className="nav" exact to='/cars'>Cars </Link>
        <Link className="nav" exact to='/login'>Login </Link>
        <Link className="nav" exact to="/greet/murthy">Greet </Link>
        </span> 
<main className="container">
<Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/users" exact component={Customers}/>
   <Route path="/login" exact component={Login}/>
   <Route path="/cars" exact component={Cars}/>

<Route path='greet/:username' render={(props)=>(<Greet {...props} username={extraProps}/>)}/>
<Route component={NotFound}/>
</Switch>
</main>
</div>

)
const NotFound=()=><div>Sorry</div>

