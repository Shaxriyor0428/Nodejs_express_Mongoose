const express = require("express");
const indexRouter = express.Router();
const department = require("./dictionary.routes");
const category = require("./category.routes");
const description = require("./description.routes");
const snonims = require("./sinonim.routes");
const admin = require("./admin.routes");
const desc_topic = require("./desc_topic.routes");
const topic = require("./topic.routes");
const tag = require("./tag.routes");
const author = require("./author.routes");
const desc_qa = require("./desc_qa.routes");
const question_answer = require("./question_answer.routes");
const user = require("./user.routes");
const social = require("./social.routes");
const author_social = require("./author_social.routes");
const guest = require("./guest.routes");

indexRouter.use("/dict", department);
indexRouter.use("/snonim", snonims);
indexRouter.use("/category", category);
indexRouter.use("/description", description);
indexRouter.use("/admin", admin);
indexRouter.use("/desc", desc_topic);
indexRouter.use("/topic", topic);
indexRouter.use("/tag", tag);
indexRouter.use("/author", author);
indexRouter.use("/desc_qa", desc_qa);
indexRouter.use("/question_answer", question_answer);
indexRouter.use("/user", user);
indexRouter.use("/social", social);
indexRouter.use("/author_social", author_social);
indexRouter.use("/guest", guest);

module.exports = indexRouter;
