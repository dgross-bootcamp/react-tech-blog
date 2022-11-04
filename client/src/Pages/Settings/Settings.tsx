import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { UserDTO } from "../../types/types";
import Auth from "../../utils/Auth";
import { QUERY_GET_USER } from "../../utils/queries/getUser";

interface UpdateUserMutationVariables {
  username?: string;
  email?: string;
  bio?: string;
  image?: string;
  password?: string;
}

const UPDATE_USER = gql`
  mutation updateUser(
    $username: String
    $email: String
    $bio: String
    $image: String
    $password: String
  ) {
    updateUser(
      username: $username
      email: $email
      bio: $bio
      image: $image
      password: $password
    ) {
      email
      token
      username
      bio
      image
    }
  }
`;

export default function Settings() {
  const { loading, data } = useQuery<{
    getUser: Omit<UserDTO, "token">;
  }>(QUERY_GET_USER);

  const [updateUser] = useMutation<
    { updateUser: UserDTO },
    UpdateUserMutationVariables
  >(UPDATE_USER, {
    refetchQueries: [
      {
        query: QUERY_GET_USER,
      },
    ],
  });

  const [username, setUsername] = useState(data?.getUser.username ?? "");
  const [email, setEmail] = useState(data?.getUser.email ?? "");
  const [bio, setBio] = useState(data?.getUser.bio ?? "");
  const [image, setImage] = useState(data?.getUser.image);
  const [password, setPassword] = useState("");

  const handleFormFieldChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const elementChanged = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (elementChanged) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "bio":
        setBio(value);
        break;
      case "image":
        setImage(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await updateUser({
        variables: {
          bio,
          email,
          image,
          password,
          username,
        },
      });

      Auth.login(response.data?.updateUser.token!);
    } catch (e) {
      console.error(e);
    }
  }

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs text-center">Your settings</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                URL of profile picture
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={image}
                name="image"
                onChange={handleFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={handleFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Short bio about you
              </label>
              <textarea
                className="form-control"
                id="bio"
                rows={8}
                value={bio}
                name="bio"
                onChange={handleFormFieldChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={handleFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={handleFormFieldChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
