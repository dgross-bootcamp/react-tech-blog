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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./config/connection"));
const resolvers_1 = __importDefault(require("./schemas/resolvers"));
const typeDefs_1 = __importDefault(require("./schemas/typeDefs"));
const authMiddleware_1 = __importDefault(require("./utils/authMiddleware"));
/**
 * Express Stuff
 */
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
/**
 * Apollo GraphQL Stuff
 */
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    context: authMiddleware_1.default,
});
(function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app });
        connection_1.default.once("open", function () {
            console.log(`🍕 MongoDB Database Started!`);
            app.listen(PORT, () => {
                console.log(`🌐 Express Started at http://localhost:8080`);
                console.log(`⚾ GraphQL Started at http://localhost:8080/graphql`);
            });
        });
    });
})();
