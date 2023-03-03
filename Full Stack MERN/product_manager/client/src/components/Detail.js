import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div>
            <header>All Products:</header>
            {
                product.map((product,index) => (
                    <div key ={index}>
                        <Link to={'/products/${product._id}'}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Detail;