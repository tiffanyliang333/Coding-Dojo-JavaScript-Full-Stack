import React, {useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ProductList = (props) => {
    const {product, setProduct} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(res => {
            console.log(res.data.products);
            setProduct(res.data.products);
        })
        .catch(err => console.log(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                console.log(res.data.products);
                setProduct(product.filter((product, index) => product._id !== productId))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <header>All Products:</header>
            {
                product.map((product,index) => (
                    <div key ={index}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                        |
                        <Link to={`/products/edit/${product._id}`}>
                            Edit
                        </Link>
                        |
                        <button onClick={(e) => {deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;