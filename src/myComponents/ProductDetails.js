import React, { useEffect, useState } from 'react';
import { getProduct, removeProduct } from '../services/productService';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    let [product, setProduct] = useState(null);
    let navigation = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        getProduct(id).then(res => {
            setProduct(res.data);
        });
    }, [])

    const editProduct = (productId) => {
        navigation(`/productEdit/${productId}`);
    }

    const deleteProduct = (productId) => {
        if(window.confirm('Are you sure to delete this product?')) {
            removeProduct(productId).then(res => {
                alert('Product deleted successfully.');
                navigation('/')
            }).catch(err => {
                alert('Something went wrong.');
            })
        }
    }

    return (
        <div className='container'>
            { product ? <div className="card m-5">
            <img className="card-img-top" src={product.image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{ product.title }</h5>
                <p className="card-text">{ product.description }</p>
                <p className="card-text"><b>Price: </b>{ product.price }</p>
                <Link to="/buynow" className="btn btn-primary">Buy Now</Link>
                <button className="btn btn-info mx-2" onClick={() => editProduct(product.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
            </div> : 'Please wait..' }
        </div>
    );
};

export default ProductDetails;