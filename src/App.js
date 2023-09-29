import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { host } from './hooks/host';
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Policy from './components/Policy'
import Pricing from './components/Pricing'
import Dashboard from './components/Dashboard'
import Search from './components/Search'
import Account from './components/Account'
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate()
  const [currentRoute, setCurrentRoute] = useState('home')
  const [loginStatus, setLoginStatus] = useState({ loading: false, login: false, email: '', level: 'FREE', expiry: '', id: '' })
  
  // check login status
  useEffect(() => {
    const token = window.localStorage.getItem('token')

    const checkLoginAPI = () => {
      setLoginStatus(p => {return{...p, loading: true}})

      const url = `${host}/api/v1/auth/checkLogin`;

      axios.post(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Authorization": "Bearer "+token,
        },
      })
      .then((response) => {
        const obj = response.data;
        if (obj.success) {
          setLoginStatus(p => { return {...p, loading: false, login: true, level: obj.level }})
          navigate('/dashboard')
        } else {
          setLoginStatus({ loading: false, login: false, email: '', level: 'FREE', expiry: '', id: '' })
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginStatus(p => {return{...p, loading: false}})
      })
    };

    if (token) {
      checkLoginAPI()
    } else {
      setLoginStatus({ loading: false, login: false, email: '', level: 'FREE', expiry: '', id: '' })
    }
  }, [])

  return (
    <div className='h-screen w-full bg-slate-100 text-base font-normal text-slate-800 overflow-y-scroll'>
      <Navbar currentRoute={currentRoute} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
      <Routes>
        <Route exact path='/' element={<Home setCurrentRoute={setCurrentRoute} loginStatus={loginStatus}/>}/>
        <Route exact path='/about' element={<About setCurrentRoute={setCurrentRoute} loginStatus={loginStatus}/>}/>
        <Route exact path='/contact' element={<Contact setCurrentRoute={setCurrentRoute}/>}/>
        <Route exact path='/policy' element={<Policy setCurrentRoute={setCurrentRoute}/>}/>
        <Route exact path='/pricing' element={<Pricing setCurrentRoute={setCurrentRoute} loginStatus={loginStatus}/>}/>
        <Route exact path='/login' element={<Login setCurrentRoute={setCurrentRoute} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}/>
        <Route exact path='/signup' element={<Signup setCurrentRoute={setCurrentRoute} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}/>
        <Route exact path='/forgotpassword' element={<ForgotPassword setCurrentRoute={setCurrentRoute} loginStatus={loginStatus}/>}/>
        <Route exact path='/dashboard' element={<Dashboard setCurrentRoute={setCurrentRoute} loginStatus={loginStatus}/>}/>
        <Route exact path='/search' element={<Search setCurrentRoute={setCurrentRoute} loginStatus={loginStatus}/>}/>
        <Route exact path='/account' element={<Account setCurrentRoute={setCurrentRoute} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>}/>
      </Routes>
    </div>
  );
}

export default App;
