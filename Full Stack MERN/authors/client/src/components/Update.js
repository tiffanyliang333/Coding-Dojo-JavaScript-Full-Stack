import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [authorNotFoundErr, setAuthorNotFoundErr] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data.author);
                setName(res.data.author.name);
            })
            .catch((err) => {
                console.log(err.res);
                setAuthorNotFoundErr('Author not found.');
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
            name,
        })
            .then(res => {
                console.log(res);
                console.log(res.data.author);
                navigate("/authors");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };

    return(
        <div>
            <Link to="/authors">Home</Link>
            <p className="purple-text">Edit this author:</p>
            <form onSubmit = {submitHandler}>
                {authorNotFoundErr ? <h2>{authorNotFoundErr}</h2> : null}
                <div>
                    <label>Name: </label>
                </div>
                <div>
                    <input type="text" value={name} name="name" onChange = {(e) => {
                        setName(e.target.value);
                    }} />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <div>
                    <Link to="/authors">
                        <button>Cancel</button>
                    </Link>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Update;