export const router = require("express").Router();

import * as handlers from "../handlers";

router.post("/userCategories", handlers.getUserCategories);
router.post("/username", handlers.getUsername);
router.post("/userBooks", handlers.getUserBooks);
router.get("/getUserList", handlers.getUserList);
router.get("/allBooks", handlers.getBooks);
