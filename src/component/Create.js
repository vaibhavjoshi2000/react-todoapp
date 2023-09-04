import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault(); // to keep prevent default action from happening.
        axios.post(
            "https://64eae426e51e1e82c576d348.mockapi.io/crud-vaibhav",
            {
                name: name,
                email: email,
                header,
            })
            .then(() => {
                history("./read");
            })
    }
    return (
        <div>
            <div className="d-flex justify-content-between m-2">
                <h1>Create</h1>
                <Link to="/read">
                    <button className="btn btn-primary">Show data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default Create
