export const router = require('express').Router()

import * as handlers from "../handlers"

router.get("/userBooks", handlers.getUserBooks)
router.get("/addNewBook", handlers.addNewBook)
router.get("/changeBookStatus", handlers.changeBookStatus)
router.get("/getUserList", handlers.getUserList)