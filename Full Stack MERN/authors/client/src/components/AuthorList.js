import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(res => {
            console.log(res.data.authors);
            setAuthor(res.data.authors);
        })
        .catch(err => console.log(err));
    } , []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log(res.data.authors);
                setAuthor(author.filter((author, index) => author._id !== authorId))
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to ="/authors/new">Add an author</Link>
                    <p className="purple-text">We have quotes by:</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {author.map((author, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{author.name}</td>
                                        <td>
                                            <Link to ={`/authors/edit/${author._id}`}>
                                                <button className="btn btn-primary">Edit</button>
                                            </Link>
                                            <button onClick={(e) => {deleteAuthor(author._id)}}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AuthorList;