const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE", // When user is deleted, comment is deleted as well
      references: {
        model: "user",
        key: "id",
      },
    },

    post_id: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE", // When the corresponding post is deleted, this comment will be set to null, rather than deleted.
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableNames: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
