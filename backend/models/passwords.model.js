import mongoose from "mongoose";
import crypto from "crypto";

import dotenv from 'dotenv'
dotenv.config();

const algorithm = process.env.ALGORITHM;    
const secretKey = process.env.SECRETKEY;

function encrypt(text) {
    const iv = crypto.randomBytes(16); //generate different ciphertext everytime
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, "hex"), iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return `${iv.toString("hex")}:${encrypted.toString()}`; // Return the encrypted text
};

function decrypt(text) {
    const textParts = text.split(":");
    const iv = Buffer.from(textParts.shift(), "hex");
    const encryptedText = Buffer.from(textParts.join(":"), "hex");
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, "hex"), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};

const passwordSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: encrypt, 
        get: decrypt
    },
}, {
    timestamps: true, //createdAT, updatedAT
    toJSON: { getters: true } 
},
);

const Password = mongoose.model('Password', passwordSchema);

export default Password;