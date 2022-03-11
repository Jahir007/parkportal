import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAppContext } from './AppContext';
import Loader from './components/Layout/Loader';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Presence from './components/StartingPage/Presence';
import Booking from './pages/Booking';
import Navbar2 from './components/Layout/Navbar2'
import OwnerPage from './pages/OwnerPage';



function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Suspense fallback={Loader}>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/auth'>
          {isLoggedIn && <HomePage />}
          {!isLoggedIn && <AuthPage />}
        </Route>

        {isLoggedIn && (
          <Route path='/profile' exact>
            <Presence />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/Booking' exact>
            <Navbar2 />
            <Booking />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/OwnerPage'>
            <Navbar2 />
            <OwnerPage />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/About'>
            <Navbar2 />
            <About />
          </Route>
        )}

        {isLoggedIn && (
          <Route path='/ContactUs'>
            <Navbar2 />
            <ContactUs />
          </Route>
        )}

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
