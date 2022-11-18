"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
exports.Topic = database_1.sequelize.define("Topic", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
});
//# sourceMappingURL=topic.js.map