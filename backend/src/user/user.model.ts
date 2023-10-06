import * as mongoose from 'mongoose';

export const UserModel = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export interface User extends mongoose.Document {
    username: string;
    email: string;
    password: string;
}