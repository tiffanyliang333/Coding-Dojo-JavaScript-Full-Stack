import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Detail = (props) => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setProductDetail(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    return(
        <div>
            <header>Product</header>
                <h2>{productDetail.title}</h2>
                <p>Price: ${productDetail.price}</p>
                <p>Description: {productDetail.desc}</p>
        </div>
    );
};

export default Detail;
