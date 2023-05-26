const Router = require("express");
const userRouter = require("./userRouter");
const projectRouter = require("./projectRouter");
const authRouter = require("./authRouter");
const employeeRouter = require("./employeeRouter");

const router = Router();

router.use("/user", userRouter);
router.use("/project", projectRouter);
router.use("/auth", authRouter);
router.use("/employee", employeeRouter);

module.exports = router;
