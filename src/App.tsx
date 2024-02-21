import type { Component } from 'solid-js';

import logo from './logo.svg';
// import Map from './Containers/Map';
// import "uno.css"
import { Routes, Route, A } from '@solidjs/router';
import { lazy, onMount } from 'solid-js'; 
import "virtual:uno.css"







const App: Component = () => {
  const About = lazy (() => import('./auth/about'))
  const register = lazy (() => import('./auth/register'))
  const Navbar = lazy (() => import('./auth/navbar'))
  const Collection = lazy (() => import('./auth/collection'))
  const Footer = lazy (() => import('./auth/footer'))
  const Login = lazy (() => import('./auth/login')) 
  const Shop = lazy (() => import('./auth/shop')) 
  const Statistic = lazy (() => import('./auth/statistic')) 
  const Option = lazy (() => import('./auth/option')) 

return (
<div> 
  <div>
  
  
    <Routes>
    <Route path="/" component={About} />
    <Route path="/register" component={register} />
      <Route path='/navbar' component={Navbar}/>
      <Route path='/collection' component={Collection}/>
      <Route path='/login' component={Login}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/statistic' component={Statistic}/>
      <Route path='/option' component={Option}/>
    </Routes>

    </div>
   <div>
   </div>

    </div>
  );
};

export default App;
