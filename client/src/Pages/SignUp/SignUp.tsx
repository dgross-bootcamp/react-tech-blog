import { gql, useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { UserDTO } from "../../types/types";
import Auth from "../../utils/Auth";
import styles from "./SignUp.module.css";

interface SignUpMutationVariables {
  username: string;
  email: string;
  password: string;
}

const SIGN_UP = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      email
      token
      username
      bio
      image
    }
  }
`;

const SignUp: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [register] = useMutation<
    { register: UserDTO },
    SignUpMutationVariables
  >(SIGN_UP);

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await register({
        variables: {
          email,
          password,
          username,
        },
      });

      Auth.login(response.data?.register.token!);
    } catch (e) {
      console.error(e);
    }

    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="d-flex align-items-center text-center">
      <main className={`${styles.Main} w-100 m-auto p-2`}>
        <form onSubmit={handleFormSubmit}>
          <img src="ttb-logos.jpeg" alt="Logo" className={`${styles.Logo}`} />
          <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
          <div className="form-floating mb-2">
            <input
              type="text"
              value={username}
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleUsernameChange}
              className="form-control"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="ross@andrew.gov"
              onChange={handleEmailChange}
              className="form-control"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="password"
              onChange={handlePasswordChange}
              className="form-control"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="w-100 btn btn-lg btn-primary">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
