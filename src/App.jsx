import React from 'react';
import Balance from './Component/Balance';
import Banking from './Component/Banking';
import Header from './Component/Header';
import './Banking/banking.css';
// import Balance from './'

export default function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Balance />
        <Banking />
      </div>
    </>
  );
}
