const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dashRoutes = require("./dashBoardRoutes");
const postRoutes = require("./blogPostRoutes");
const authRoutes = require("./authentificationRoutes");

router.use("/users", userRoutes );
router.use("dashBoards", dashRoutes);
router.use("/posts", postRoutes);
router.use("/login", authRoutes);

module.exports = router; 