import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxOWVhY2QwYmZiOTA5NTNmMjJiOTMxIn0sImlhdCI6MTY3OTQyNTAxM30.IPcQ3vWULZu8Me4gCzri6v7MT7Zy0ww5nGzmIejcT2c"
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);

        //    save the auth token and reflect
        localStorage.setItem('token', json.authtoken);
        navigate("/");

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' onChange={onChange} id="cpassword" minLength={5} required/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
