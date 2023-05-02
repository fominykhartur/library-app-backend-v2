export const router = require('express').Router()

import * as handlers from "../handlers"
   
router.get("/categories", handlers.getCategories)