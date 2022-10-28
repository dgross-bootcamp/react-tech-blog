import React, { FormEvent, useState } from "react";
import styles from "./Login.module.css";

const Login: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex align-items-center text-center">
      <main className={`${styles.Main} w-100 m-auto p-2`}>
        <form onSubmit={handleFormSubmit}>
          <img src="ttb-logos.jpeg" alt="Logo" className={`${styles.Logo}`} />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
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
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
