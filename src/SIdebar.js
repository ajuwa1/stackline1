import React from "react";
import './Sidebar.css';
import productData from './productData.json'

const Sidebar = () => {
    const product = productData[0];
    return (
        <div className="sidebar">
            <img src = {product.image} alt = 'Sidebar Logo' className = 'sidebar-logo' />
            <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                <ul>
                    {product.tags.map((tag,index) => (
                        <li key = {index} className="tag-box">{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;