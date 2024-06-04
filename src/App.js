import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Sidebar from './SIdebar';
import productData from './productData.json'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <main className='main-content'>
        <table>
          <thead>
            <tr>
              <th>Week Ending</th>
              <th>Retail Sales</th>
              <th>Wholesale Sales</th>
              <th>Units Sold</th>
              <th>Retailer Margin</th>
            </tr>
          </thead>
          <tbody>
            {productData[0].sales.map((sale, index) => (
            <tr key = {index}>
              <td>{sale.weekEnding}</td>
              <td>{sale.retailSales}</td>
              <td>{sale.wholesaleSales}</td>
              <td>{sale.unitsSold}</td>
              <td>{sale.retailerMargin}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
