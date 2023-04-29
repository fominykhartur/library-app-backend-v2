export const router = require('express').Router()

import { router as router_service } from "./route_service";

router.use("/service", router_service);
router.use("/users", router_service);

module.exports = router;
