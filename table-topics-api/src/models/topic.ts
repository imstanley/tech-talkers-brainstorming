import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Topic = sequelize.define(
  "Topic",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    schema: "TableTopics",
  }
);
