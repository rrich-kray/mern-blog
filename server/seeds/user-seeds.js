const User = require("../models/User");

const userData = [
  {
    first_name: "John",
    last_name: "Smith",
    email: "johnsmith@gmail.com",z
    password: "password",
  },
  {
    first_name: "Johnny",
    last_name: "Smith",
    email: "johnnysmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Joe",
    last_name: "Smith",
    email: "joesmith@gmail.com",
    password: "password",
  },
  {
    first_name: "kevin",
    last_name: "Smith",
    email: "kevinsmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Manny",
    last_name: "Smith",
    email: "mannysmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Jason",
    last_name: "Smith",
    email: "jasonsmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Jimmy",
    last_name: "Smith",
    email: "jimmysmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Ron",
    last_name: "Smith",
    email: "ronsmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Rob",
    last_name: "Smith",
    email: "robsmith@gmail.com",
    password: "password",
  },
  {
    first_name: "Robby",
    last_name: "Smith",
    email: "robbysmith@gmail.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
