import React from 'react';
import './ProductItem.css'
function ProductItem({ product }) {
    if (!product) {
        return <p>No product data available</p>;
    }

    return (
        <div className="card h-100">
            <img className='card-img-top' src={product.image} alt={product.title} />
            <div className="card-body">
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="stretched-link">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: Rs {product.price}</p>
                </a>
            </div>
        </div>
    );
}

export default ProductItem;
