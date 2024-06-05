import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import Sidebar from './SIdebar';
import productData from './productData.json'

function App() {
  const [sortOption, setSortOption] = useState('newest');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  }

  const handleDropDownClick = () => {
    const newSortOption = sortOption === '' ? 'newest' : '';
    setSortOption(newSortOption);
  }

  const sortedSales = [...productData[0].sales].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.weekEnding) - new Date(a.weekEnding);
    } else {
      return new Date(a.weekEnding) - new Date(b.weekEnding);
    }
  })

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
                  <th>
                    <div className='week-ending-header'>WEEK ENDING</div>

                    <div className='sort-option' onClick={handleDropDownClick}>
                      <label htmlFor='sort-option'></label>
                      {sortOption === '' ? (
                        <select id='sort-option' value={sortOption} onChange={handleSortChange}>
                          <option value='' ></option>
                        </select>
                      ) : (
                        <select id='sort-option' value={sortOption} onChange={handleSortChange}>
                          <option value='newest'></option>
                          <option value='newest'></option>
                        </select>
                      )}
                    </div>
                  </th>
                  <th>
                    <div className='week-ending-header'>RETAIL SALES</div>
                    <select> </select>
                  </th>
                  <th>
                    <div className='week-ending-header'>WHOLESALE SALES</div>
                    <select> </select>
                  </th>
                  <th>
                    <div className='week-ending-header'>UNITS SOLD</div>
                    <select> </select>
                  </th>
                  <th>
                    <div className='week-ending-header'>RETAILER MARGIN</div>
                    <select> </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedSales.map((sale, index) => {

                  const date = new Date(sale.weekEnding);
                  const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`
                  return (
                    <tr key={index}>
                      <td className='centered'>{formattedDate}</td>
                      <td className='centered'>${sale.retailSales}</td>
                      <td className='centered'>${sale.wholesaleSales}</td>
                      <td className='centered'>{sale.unitsSold}</td>
                      <td className='centered'>${sale.retailerMargin}</td>
                    </tr>
                  )

                })}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
