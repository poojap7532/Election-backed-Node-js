const express = require("express");
const userRouter = require("./user.router");
const LoginRouter = require("./login.router");
const ElectionRouter = require("./election.router");
const PartyRouter = require("./party.router");
const PartyListRouter = require("./partylist.router");
const VoteRouter = require("./vote.router");
const CountRouter = require("./count.router");
const AdminRouter = require("./admin.router");
const router = express.Router();

router.use("/user", userRouter);
router.use("/login", LoginRouter);
router.use("/election", ElectionRouter);
router.use("/party", PartyRouter);
router.use("/partylist", PartyListRouter);
router.use("/vote", VoteRouter);
router.use("/total", CountRouter);
router.use("/admin", AdminRouter);

module.exports = router;