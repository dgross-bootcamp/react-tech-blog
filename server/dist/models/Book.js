"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: String,
});
const Book = (0, mongoose_1.model)("Book", bookSchema);
exports.default = Book;
