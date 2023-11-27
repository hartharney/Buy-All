"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../Component/index"));
const router = express_1.default.Router();
router.get("/", (_, res) => {
    res.status(200).json({ message: "SUCCESS" });
});
router.use("/api", index_1.default.Users.routes);
router.use("/api", index_1.default.Products.routes);
exports.default = router;
