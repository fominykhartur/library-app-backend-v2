export const router = require('express').Router()

import {status,test} from "../handlers"

// const handlers = require("../handlers")

router.get("/status", status)
    
router.get("/q*we", test)

console.log(router)

