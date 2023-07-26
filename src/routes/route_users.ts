export const router = require("express").Router();

import * as handlers from "../handlers";

router.post("/changeBookStatus", handlers.changeBookStatus);
router.post("/addNewBook", handlers.addNewBook);
