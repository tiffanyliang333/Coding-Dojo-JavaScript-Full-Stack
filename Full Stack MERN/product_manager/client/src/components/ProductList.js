import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {product, setProduct} = props;
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(res => {
            console.log(res.data.products);
            setProduct(res.data.products);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div>
            <header>All Products:</header>
            {
                product.map((product,index) => (
                    <div key ={index}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;