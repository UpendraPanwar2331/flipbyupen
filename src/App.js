// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Login from './component/header/Login';
import DetailView from './details/DetailView';
import Cart from './component/cart/Cart';
import Payment from './component/Payment/Payment'
import NewRegistrationPage from './component/header/NewRegistration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Cart/Payment' element={<Payment />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/registration' element={<NewRegistrationPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
