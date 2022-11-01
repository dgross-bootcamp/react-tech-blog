import { AuthenticationError } from "apollo-server-express";
import { Request } from "express";
import User from "../models/User";
import { UserDTO } from "../types/types";
import { signToken } from "../utils/authMiddleware";

interface RegisterMutationArgs {
  username: string;
  email: string;
  password: string;
}

interface LoginMutationArgs {
  email: string;
  password: string;
}

const resolvers = {
  Query: {
    getUser: async function (
      _: undefined,
      __: {},
      { user: { email } }: Request
    ): Promise<UserDTO> {
      const user = await User.findOne({ email });

      if (user) {
        const token = signToken(user);
        return {
          bio: user.bio,
          email: user.email,
          image: user.image,
          token: token,
          username: user.username,
        };
      }
      throw new AuthenticationError("Error while getting user!");
    },
  },
  Mutation: {
    register: async function (
      _: undefined,
      { username, email, password }: RegisterMutationArgs
    ): Promise<UserDTO> {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return {
        bio: user.bio,
        email: user.email,
        image: user.image,
        token: token,
        username: user.username,
      };
    },
    login: async function (
      _: undefined,
      { email, password }: LoginMutationArgs
    ): Promise<UserDTO> {
      const user = await User.findOne({ email });

      if (user) {
        if (await user.passwordIsCorrect(password)) {
          const token = signToken(user);
          return {
            bio: user.bio,
            email: user.email,
            image: user.image,
            token: token,
            username: user.username,
          };
        }
      }
      throw new AuthenticationError("Error while logging in!");
    },
  },
};

export default resolvers;
