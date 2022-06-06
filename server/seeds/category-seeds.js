const Category = require("../models/Category");

const categoryData = [
  {
    category_name: "News",
  },
  {
    category_name: "Personal",
  },
  {
    category_name: "Tutorials",
  },
  {
    category_name: "Opinion",
  },
  {
    category_name: "Gadgets",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
