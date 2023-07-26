export const router = require("express").Router();

import * as handlers from "../handlers";

router.post("/signup", handlers.signUp);
router.post("/login", handlers.logIn);
