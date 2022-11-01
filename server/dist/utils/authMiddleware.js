"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET_KEY;
const TOKEN_EXPIRATION = "2h";
function authMiddleware({ req }) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return req;
    }
    const token = authHeader.split(" ")[1].trim();
    if (!token) {
        return req;
    }
    try {
        const { data } = jsonwebtoken_1.default.verify(token, secret, {
            maxAge: TOKEN_EXPIRATION,
        });
        req.user = data;
    }
    catch (error) {
        console.log("Invalid token");
    }
    return req;
}
function signToken({ _id, username, email }) {
    const payload = {
        data: {
            username,
            _id,
            email,
        },
    };
    return jsonwebtoken_1.default.sign(payload, secret, {
        expiresIn: TOKEN_EXPIRATION,
    });
}
exports.signToken = signToken;
exports.default = authMiddleware;
