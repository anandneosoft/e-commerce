import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { addProduct, getProduct, updateProduct } from '../services/productService';
import { useNavigate, useParams } from 'react-router-dom';
const AddProduct = () => {
    const { id } = useParams();
    let navigation = useNavigate();
    let [product, setProduct] = useState({});


    useEffect(() => {
        getProduct(id).then(res => {
            setProduct(res.data)
        })
    }, {})

    let formik = useFormik({
        initialValues: {
            title: product && product.title ? product.title : '',
            price: product && product.price ? product.price : 0.00,
            description: product && product.description ? product.description : '',
            category: product && product.category ? product.category : 'electronics',
            image: product && product.image ? product.image : ''
        },
        enableReinitialize: true,
        onSubmit: values => {
            if (product && product.id) {
                updateProduct(id, values).then(res => {
                    alert('Product details updated successfully.');
                    navigation('/');
                }).catch(err => {
                    alert('Something went wrong.')
                })
            } else {
                addProduct(values).then(res => {
                    alert('Product created successfully.');
                    navigation('/');
                }).catch(err => {
                    alert('Something went wrong.')
                })
            }
        },
        validate: values => {
            let errors = {};

            if (!values.title) {
                errors.title = "Required.";
            }
            if (!values.price) {
                errors.price = "Required.";
            }
            if (!values.image) {
                errors.image = "Required.";
            }
            if (!values.category) {
                errors.category = "Required.";
            }
            return errors;
        }
    })

    return (
        <div className='container'>
            <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
            <form className='add-product-form' onSubmit={formik.handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-4 col-form-label text-start">Product Name <span className='text-danger'>*</span></label>
                    <div className='col-sm-8'>
                        <input type="text" className="form-control" id="name" aria-describedby="namelHelp" onChange={formik.handleChange} value={formik.values.title} />
                        {formik.errors.title ? (<div id="nameHelp" className="form-text text-danger">{formik.errors.title}</div>) : null}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="price" className="col-sm-4 col-form-label text-start">Price <span className='text-danger'>*</span></label>
                    <div className='col-sm-8'>
                        <input type="text" className="form-control" id="price" onChange={formik.handleChange} value={formik.values.price} />
                        {formik.errors.price ? (<div id="priceHelp" className="form-text text-danger">{formik.errors.price}</div>) : null}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="image" className="col-sm-4 col-form-label text-start">Image Url <span className='text-danger'>*</span></label>
                    <div className='col-sm-8'>
                        <input type="text" className="form-control" id="image" onChange={formik.handleChange} value={formik.values.image} />
                        {formik.errors.image ? (<div className="form-text text-danger">{formik.errors.image}</div>) : null}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="category" className="col-sm-4 col-form-label text-start">Category <span className='text-danger'>*</span></label>
                    <div className='col-sm-8'>
                        <select id='category' name='category' className='form-control' onChange={formik.handleChange} value={formik.values.category}>
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's clothing">Men's clothing</option>
                            <option value="women's clothing">Women's clothing</option>
                        </select>
                        {formik.errors.category ? (<div className="form-text text-danger">{formik.errors.category}</div>) : null}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="description" className="col-sm-4 col-form-label text-start">Description</label>
                    <div className='col-sm-8'>
                        <textarea className="form-control" id="description" onChange={formik.handleChange} value={formik.values.description}></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;