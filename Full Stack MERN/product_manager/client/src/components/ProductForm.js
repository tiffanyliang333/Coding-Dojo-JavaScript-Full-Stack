import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title, price, desc
        })
        .then ((res) => {
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDesc("");
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <h1>Product Manager</h1>

            <form onSubmit = {submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" value = {title} name = "title" onChange = {(e) => {
                        setTitle(e.target.value);
                    }} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" value ={price} name = "price" onChange = {(e) => {
                        setPrice(e.target.value);
                    }} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value = {desc} name = "desc" onChange = {(e) => {
                        setDesc(e.target.value);
                    }} />
                </div>
                <div>
                    <input type="submit" value="Create"/>
                </div>
            </form>
            <p>________________________________________________</p>
        </div>
    )
}

export default ProductForm;