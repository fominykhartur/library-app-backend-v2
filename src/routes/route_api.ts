export const router = require('express').Router()

import { router as router_books } from "./route_books";
import { router as router_users } from "./route_users";
import { router as router_auth } from "./route_auth";

router.use("/books", router_books);
router.use("/users", router_users);
router.use("/auth", router_auth)

module.exports = router;
