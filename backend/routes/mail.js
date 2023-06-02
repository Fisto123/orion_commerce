import express from "express";
import { postMails } from "../controllers/mail.js";

const router = express.Router();

router.post("/mail/createMail", postMails);

export default router;
