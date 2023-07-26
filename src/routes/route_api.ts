export const router = require("express").Router();

import { router as router_books } from "./route_books";
import { router as router_users } from "./route_users";
import { router as router_auth } from "./route_auth";
import { router as router_public } from "./route_public";
import { attachCurrentUser } from "../middlewares/attachCurrentUser";
import { isAuth } from "../middlewares/isAuth";

router.use("/books", isAuth, attachCurrentUser, router_books);
router.use("/users", isAuth, attachCurrentUser, router_users);
router.use("/auth", router_auth);
router.use("/public", router_public);

module.exports = router;
