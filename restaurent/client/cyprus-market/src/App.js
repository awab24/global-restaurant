import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import AllHome from './home/AllHome';
import CartViewer from './home/CartViewer';
import Auth from './auth/Auth';
import AuthClientSignIn from './auth/AuthClientSignIn';
import AuthPublisherSignIn from './publisher/publisherAuth/AuthPublisherSignIn.js';
import AuthClientSignUp from './auth/AuthClientSignUp';
 import AuthPublisherSignUp from './publisher/publisherAuth/AuthPublisherSignUp.js';
import ResturantsProducts from './home/ResturantsProducts';
import Drinks from './drinks/Drinks.js';
import BestSelling from './bestSelling/BestSelling.js';
import ForSummer from './forSummer/forSummer.js';
import AboutUs from './aboutUs/AboutUs.js';

import Soups from './home/soups/Soups.js';
import BreakFast from './home/breakfast/BreakFast.js';
import Salads from './home/salads/Salads.js';
import Desserts from './home/desserts/Desserts.js';
import Coffees from './home/coffees/Coffees.js';

import SEAfood from './home/seafood/SEAfood.js';


function App() {
  // In your main application entry file (e.g., index.js or App.js)
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('Script error')) {
    // Suppress specific script errors
    event.preventDefault(); // Stop the error from appearing in the console
    return true; // Indicate that the error has been handled
  }
});

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('Script error')) {
    event.preventDefault(); // Suppress unhandled promise rejections
    return true; // Indicate that the rejection has been handled
  }
});

  return (
    <div className="App">
        <Routes>
      
          <Route path='/' element={<AllHome/>}/>
          <Route path='/auth-publisher-sign-up' element={<AuthPublisherSignUp/>} />
          <Route path='/auth' element={<Auth/>}/>

          <Route path='/productName' element={<CartViewer/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/auth-client-sign-in' element={<AuthClientSignIn/>} />
          <Route path='/auth-client-sign-up' element={<AuthClientSignUp/>} />
          <Route path='/auth-publisher-sign-in' element={<AuthPublisherSignIn/>} /> 

          <Route path='/resturant-products' element={<ResturantsProducts/>}/>
          <Route path='best-selling' element={<BestSelling/>}/>
          <Route path='for-summer' element={<ForSummer/>}/>
          <Route path='about-us' element={<AboutUs/>}/>


          <Route path='/seafood' element={<SEAfood/>}/>
          <Route path='soups' element={<Soups/>}/>
          <Route path='/breakfast' element={<BreakFast/>}/>
          <Route path='/salads' element={<Salads/>}/>
          <Route path='/desserts' element={<Desserts/>}/>
          <Route path='/drinks' element={<Drinks/>}/>
          <Route path='/coffees' element={<Coffees/>}/>


        </Routes>
    </div>
  );
}

export default App;


