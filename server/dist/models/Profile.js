"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
});
const Profile = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = Profile;
