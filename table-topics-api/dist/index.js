"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const topic_1 = require("./models/topic");
const app = (0, express_1.default)();
const port = 5000;
const testConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.sequelize.authenticate();
        return "Connection has been established successfully.";
    }
    catch (error) {
        return `Unable to connect to the database: ${error}`;
    }
});
app.get("/", (req, res) => {
    res.send("Hello Tech Talkers!");
});
app.get("/test-connection", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const testResult = yield testConnection();
    res.send(testResult);
}));
app.get("/synchronize-schema", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const syncResult = yield topic_1.Topic.sync({ force: true });
    res.send(`Synchronization result: ${syncResult}`);
}));
app.listen(port, () => {
    return console.log(`Listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map