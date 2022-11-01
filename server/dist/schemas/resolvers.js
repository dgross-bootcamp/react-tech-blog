"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const User_1 = __importDefault(require("../models/User"));
const authMiddleware_1 = require("../utils/authMiddleware");
const resolvers = {
    Query: {
        getUser: function (_, __, { user: { email } }) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield User_1.default.findOne({ email });
                if (user) {
                    const token = (0, authMiddleware_1.signToken)(user);
                    return {
                        bio: user.bio,
                        email: user.email,
                        image: user.image,
                        token: token,
                        username: user.username,
                    };
                }
                throw new apollo_server_express_1.AuthenticationError("Error while getting user!");
            });
        },
    },
    Mutation: {
        register: function (_, { username, email, password }) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield User_1.default.create({ username, email, password });
                const token = (0, authMiddleware_1.signToken)(user);
                return {
                    bio: user.bio,
                    email: user.email,
                    image: user.image,
                    token: token,
                    username: user.username,
                };
            });
        },
        login: function (_, { email, password }) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield User_1.default.findOne({ email });
                if (user) {
                    if (yield user.passwordIsCorrect(password)) {
                        const token = (0, authMiddleware_1.signToken)(user);
                        return {
                            bio: user.bio,
                            email: user.email,
                            image: user.image,
                            token: token,
                            username: user.username,
                        };
                    }
                }
                throw new apollo_server_express_1.AuthenticationError("Error while logging in!");
            });
        },
    },
};
exports.default = resolvers;
