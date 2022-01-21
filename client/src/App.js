import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Page from 'react-page-loading';

import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import SignIn from './Pages/Sign/SignIn';
import SignUp from './Pages/Sign/SignUp';
import Contact from './Pages/contact';
import Profil from './Pages/Profil/Profil';
import ScrollToTop from './Components/ScrollToTop';
import NotFound from './Components/NotFound';
import About from './Pages/About/About';
import Help from './Pages/Help/Help';
import HelpInfo from './Pages/Help/HelpInfo';
import AddJob from './Pages/AddJob/AddJob';
import Update from './Pages/Update/Update';
import UpdateJob from './Pages/Update/UpdateJob';
import * as actions from './actions';
import './Styles/Global.css';

function App(props) {
    const [isLoad, setIsLoad] = useState(true);
    // axios.defaults.baseURL = 'https://finderht.herokuapp.com'
    
    useEffect(() => {
        props.getUser();
        setIsLoad(false);
    }, [props]);

  return (
    <div>
        {isLoad ? (
          <div class="grid place-items-center">
            <i class="fa fa-spinner fa-spin bg-red-500"></i>
          </div>
        ) : (
          <div class="font-sans">
            <Router>
              <ScrollToTop />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/api/job/find" element={<Search />} />
                <Route path="/auth/register" element={<SignUp />}  />
                <Route path="/auth/login" element={<SignIn />} />
                <Route path="/about" element={<About />} />
                <Route path="/api/user/:id" element={<Profil />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help_search" element={<Help />} />
                <Route path="/help_post" element={<HelpInfo />} />
                <Route path="/api/job/add" element={<AddJob  />} />
                <Route path="/api/user/:id/update-profil" element={<Update  />} />
                <Route path="/api/user/:id/update-job" element={<UpdateJob  />} />
                <Route element={<NotFound />} />
              </Routes>
            </Router>
          </div>
        )}
      </div>
    );
}

export default connect(null, actions)(App);