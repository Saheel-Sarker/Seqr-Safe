import express from 'express'
import { createPassword, deletePassword, getPasswords, updatePassword } from '../controllers/password.controller.js';

const router = express.Router()

router.get("/", getPasswords);

router.post("/", createPassword);

router.put("/:id", updatePassword);

router.delete("/:id", deletePassword);

export default router;