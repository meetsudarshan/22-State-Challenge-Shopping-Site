import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function SignupPage(props) {
  const [signupFormState, setSignupFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          email: signupFormState.email,
          password: signupFormState.password,
          firstName: signupFormState.firstName,
          lastName: signupFormState.lastName
        }
      });
      const token = data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setSignupFormState({
      ...signupFormState,
      [name]: value
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">
        ← Go to Login
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
