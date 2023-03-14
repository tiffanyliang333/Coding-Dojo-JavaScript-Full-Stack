import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const New = (props) => {
    const {author, setAuthor} = props;
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, {
            name,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setName("");
            navigate("/authors");
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <Link to="/authors">Home</Link>
            <p className="purple-text">Add a new author:</p>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>Name: </label>
                </div>
                <div>
                    <input type="text" value={name} name="name" onChange = {(e) => {
                        setName(e.target.value);
                    }} />
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

export default New;