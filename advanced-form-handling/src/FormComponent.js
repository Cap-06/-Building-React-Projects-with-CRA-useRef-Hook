import React, { useRef, useState } from 'react';

const FormComponent = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateInput = (name, value) => {
    let errorMessage = '';
    if (name === 'name' && value.length < 3) {
      errorMessage = 'Name must be at least 3 characters long.';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = 'Email is invalid.';
    } else if (name === 'password' && value.length < 6) {
      errorMessage = 'Password must be at least 6 characters long.';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(errors).every((error) => error === '') &&
                        Object.values(formValues).every((value) => value !== '');
    if (isFormValid) {
      console.log('Form submitted successfully:', formValues);
      // Perform any additional form submission logic here
    } else {
      console.log('Form contains errors. Please fix them before submitting.');
    }
  };

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            ref={nameRef}
            onClick={() => handleFocus(nameRef)}
          />
        </label>
        {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            ref={emailRef}
            onClick={() => handleFocus(emailRef)}
          />
        </label>
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            ref={passwordRef}
            onClick={() => handleFocus(passwordRef)}
          />
        </label>
        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
