import React, { useState } from 'react';
import './../style/Register.css';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted: ", form);
  };

  return (
    <div className = "container">
      <h2> Babysitter Registration </h2>
      <form onSubmit = {handleSubmit}>

        <label htmlFor = "name"> Full Name: </label>
        <input
          type = "text"
          id = "name"
          name = "name"
          autoComplete = 'on'
          value = {form.name}
          onChange = {handleChange}
          required
        />

        <label htmlFor = "email"> Email: </label>
        <input
          type = "email"
          id = "email"
          name = "email"
          autoComplete = 'on'
          value = {form.email}
          onChange = {handleChange}
          required
        />

        <label htmlFor = "password"> Password: </label>
        <input
          type = "password"
          id = "password"
          name = "password"
          value = {form.password}
          onChange = {handleChange}
          required
        />

        <label htmlFor = "experience"> Experience: </label>
        <input
          type = "text"
          id = "experience"
          name = "experience"
          value = {form.experience}
          onChange = {handleChange}
          required
        />

        <button type = "submit"> Register </button>
      </form>
    </div>
  );
}

export default Register;