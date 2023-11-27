import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/productService';


const Products = () => {

    let [productList, setProductList] = useState([])
    const navigate = useNavigate();

    let addProdcut = () => {
        navigate('/addProduct');
    }

    useEffect(() => {
        getProducts().then(res => {
            setProductList(res.data)
        })
      }, []); 

    let productDetails = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col'>
                    <h3>Products
                    <button className='btn btn-sm btn-primary float-right' onClick={() => addProdcut()}>Add New Product</button>
                    </h3>
                </div>
            </div>
            {productList.length ? <div className='row'>
                {productList.map(item => 
                    <div className='col-3 mb-3' onClick={() => productDetails(item.id)}>
                        <div class="card">
                            <div class="card-header">{item.title}</div>
                            <div class="card-body">
                                <img className="card-img-top" src={item.image} alt={item.title} />
                                <p><b>Price </b>{item.price}</p>
                                <p><b>Category </b>{item.category}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div> : 'Please wait..'}
        </div>
    );
};

export default Products;