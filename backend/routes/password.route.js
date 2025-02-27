import express from 'express';
import { createPassword, deletePassword, getPasswords, updatePassword } from '../controllers/password.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/", verifyToken, getPasswords);
router.post("/", verifyToken, createPassword);
router.put("/:id", verifyToken, updatePassword);
router.delete("/:id", verifyToken, deletePassword);

export default router;