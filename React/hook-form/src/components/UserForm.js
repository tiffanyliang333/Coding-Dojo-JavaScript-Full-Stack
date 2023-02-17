import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must have 2 characers.");
        }else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must have 2 characters.");
        }else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must have 5 characters.");
        }else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must have 8 characters.");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            setConfirmPasswordError("Passwords must match.")
        }else{
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();

    const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if(hasBeenSubmitted){
            return "Thank you for submitting the form!";
        }else {
            return "Welcome, please submit the form.";
        }
    }

    return(
        <div>
            <form onSubmit = { createUser }>
                <h3>{ formMessage() }</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ handleFirstName }/>
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ handleLastName }/>
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ handleEmail }/>
                    {
                        emailError ?
                        <p>{ emailError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ handlePassword }/>
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ handleConfirmPassword }/>
                    {
                        confirmPasswordError ?
                        <p>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User"/>
            </form>
            
            {/* <div>
                <h3>Your Form Data</h3>
                <p><label>First Name: </label>{ firstName }</p>
                <p><label>Last Name: </label>{ lastName }</p>
                <p><label>Email: </label>{ email }</p>
                <p><label>Password: </label>{ password }</p>
                <p><label>Confirm Password: </label>{ confirmPassword }</p>
            </div> */}
        </div>
    );
};

export default UserForm;