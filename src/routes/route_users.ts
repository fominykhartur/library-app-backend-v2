export const router = require('express').Router()

import * as handlers from "../handlers"

router.post("/userBooks", handlers.getUserBooks)
router.post("/changeBookStatus", handlers.changeBookStatus)
router.get("/addNewBook", handlers.addNewBook)
router.get("/getUserList", handlers.getUserList)