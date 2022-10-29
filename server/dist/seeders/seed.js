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
const connection_1 = __importDefault(require("../config/connection"));
const Book_1 = __importDefault(require("../models/Book"));
const Profile_1 = __importDefault(require("../models/Profile"));
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const profiles = [
    {
        name: "Ross",
        email: "r@ross.gov",
        password: "password",
    },
    {
        name: "Dang Ross",
        email: "dgross@instructors.2u.com",
        password: "chartreuse",
    },
];
connection_1.default.once("open", function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Book_1.default.deleteMany({});
            yield Profile_1.default.deleteMany({});
            yield Book_1.default.create(books);
            yield Profile_1.default.create(profiles);
            console.log("🌱 Database Seeded! 🌱");
            process.exit(0);
        }
        catch (error) {
            console.log(error);
        }
    });
});
