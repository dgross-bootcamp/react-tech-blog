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
const Book_1 = __importDefault(require("../models/Book"));
const Profile_1 = __importDefault(require("../models/Profile"));
const authMiddleware_1 = require("../utils/authMiddleware");
const resolvers = {
    Query: {
        books: function () {
            return __awaiter(this, void 0, void 0, function* () {
                return Book_1.default.find({});
            });
        },
        profiles: function () {
            return __awaiter(this, void 0, void 0, function* () {
                return Profile_1.default.find({});
            });
        },
    },
    Mutation: {
        addProfile: (_, { name, email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
            const profile = yield Profile_1.default.create({ name, email, password });
            const token = (0, authMiddleware_1.signToken)(profile);
            return { token, profile };
        }),
    },
};
exports.default = resolvers;
