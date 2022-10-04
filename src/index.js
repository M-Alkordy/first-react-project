import './component/assets/mkstyle.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/header/Header';
import Block from './component/block/Block';
import GetInTouch from './component/get_in_touch/GetInTouch';
import GetStarted from './component/get_started/GetStarted';
import Footer from './component/footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <Block />
  <GetInTouch />
  <GetStarted />
  <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
