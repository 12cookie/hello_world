import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import './../style/Register.css';

function Register() {

  const [form, setForm] = useState({
    id: '',
    name: '',
    age: '',
    education: ''
  });

  const [messages, setMessages] = useState([]);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const handleSubmit = async(e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Registration submitted: ", form);

    try {
      const response = await axios.post(
        "http://localhost:8080/v1/register",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Wavemaker",
            "X-Request-ID": "26356718"
          }
        });
      console.log("Registration response: ", response);
      setMessages(["Employee registered successfully!"]);
      setIsError(false);
      setForm({
        id: '',
        name: '',
        age: '',
        education: ''
      });
    } catch (error) {
      console.error("Error registering employee: ", error);

      if (error.response?.data?.validationErrors) {
        console.log("Validation errors: ", error.response.data.validationErrors);
        setMessages(Object.values(error.response?.data?.validationErrors));
      } else {
        setMessages([error.response?.data?.message || "Something went wrong!"]);
      }
      setIsError(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setShowModal(true);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className = "register-container">
      <h2> Babysitter Registration </h2>
      <form onSubmit = {handleSubmit}>

      <label htmlFor = "id"> User ID: </label>
        <input
          type = "text"
          id = "id"
          name = "id"
          value = {form.id}
          onChange = {handleChange}
          // required
        />

        <label htmlFor = "name"> Full Name: </label>
        <input
          type = "text"
          id = "name"
          name = "name"
          autoComplete = 'on'
          value = {form.name}
          onChange = {handleChange}
          // required
        />

        <label htmlFor = "age"> Age: </label>
        <input
          type = "text"
          id = "age"
          name = "age"
          value = {form.age}
          onChange = {handleChange}
          // required
        />

        <label htmlFor = "education"> Education: </label>
        <input
          type = "text"
          id = "education"
          name = "education"
          value = {form.education}
          onChange = {handleChange}
          // required
        />

        <button type = "submit"> Register </button>
      </form>

      {showModal && (
        <div className = "modal-overlay">
          <div className = {`modal-box ${isError ? "error" : "success"}`}>
            {isError ? <h3> Error </h3> : <h3> Success </h3>}
            <ul>
              {messages.map((msg, index) => (
                <li key = {index}> {msg} </li>
              ))}
            </ul>
            <button onClick = {() => setShowModal(false)}> OK </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Register;