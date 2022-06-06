const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "JavaScript",
  },
  {
    tag_name: "Python",
  },
  {
    tag_name: "Computer Science",
  },
  {
    tag_name: "SQL",
  },
  {
    tag_name: "MySQL",
  },
  {
    tag_name: "Java",
  },
  {
    tag_name: "Sequelize",
  },
  {
    tag_name: "HTML",
  },
  {
    tag_name: "CSS3",
  },
  {
    tag_name: "Network",
  },
  {
    tag_name: "JQuery",
  },
  {
    tag_name: "TypeScript",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
