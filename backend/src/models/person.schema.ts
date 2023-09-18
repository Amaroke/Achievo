import { Schema, model } from 'mongoose';

const personSchema = new Schema({
    firstname: String,
    lastname: String,
    entity: String,
});

export const PersonModel = model('Person', personSchema);