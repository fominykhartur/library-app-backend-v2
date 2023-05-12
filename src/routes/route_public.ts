export const router = require('express').Router()

import * as handlers from "../handlers"

router.post("/userCategories", handlers.getUserCategories)
