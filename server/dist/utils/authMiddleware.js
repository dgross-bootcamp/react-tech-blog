"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET_KEY;
function authMiddleware(req, res, next) {
    var _a;
    const authHeader = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a["authorization"];
    if (!authHeader) {
        return req;
    }
    const token = authHeader.split(" ")[1].trim();
    if (!token) {
        return req;
    }
    try {
        const { data } = jsonwebtoken_1.default.verify(token, secret, { maxAge: "2h" });
        req.profile = data;
    }
    catch (error) {
        console.log("Invalid token");
    }
    return req;
}
function signToken(profileData) {
    return jsonwebtoken_1.default.sign({
        data: { name: profileData.name, email: profileData.email },
    }, secret, { expiresIn: "2h" });
}
exports.signToken = signToken;
exports.default = authMiddleware;
