import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Sidebar from './SIdebar';
import productData from './productData.json'

function App() {
  return (
    <>
    <Navbar />
    <div className='app-container'>
      
       <main className='main-content'>
      <Sidebar />
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>WEEK ENDING</th>
              <th>RETAIL SALES</th>
              <th>WHOLESALE SALES</th>
              <th>UNITS SOLD</th>
              <th>RETAILER MARGIN</th>
            </tr>
          </thead>
          <tbody>
            {productData[0].sales.map((sale, index) => {
              
              const date = new Date(sale.weekEnding);
              const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
            return (
              <tr key = {index}>
              <td className='centered'>{formattedDate}</td>
              <td className='centered'>${sale.retailSales}</td>
              <td className='centered'>${sale.wholesaleSales}</td>
              <td className='centered'>{sale.unitsSold}</td>
              <td className='centered'>${sale.retailerMargin}</td>
            </tr>
            );
            
            })};
          </tbody>
        </table>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
