const Post = require("../models/Post");

const postData = [
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 1,
    category_id: 1,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 2,
    category_id: 2,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 3,
    category_id: 3,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 4,
    category_id: 3,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 5,
    category_id: 4,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 6,
    category_id: 5,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 7,
    category_id: 1,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 8,
    category_id: 2,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 9,
    category_id: 3,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 9,
    category_id: 4,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 10,
    category_id: 5,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 1,
    category_id: 1,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 2,
    category_id: 2,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 3,
    category_id: 3,
  },
  {
    title: "This is a post",
    content: `Fugiat adipisicing reprehenderit et laboris quis fugiat enim sunt commodo exercitation sunt deserunt est ad. Aliqua officia tempor incididunt consequat irure. Deserunt quis qui non magna excepteur irure. Mollit quis laborum cillum ipsum ad nostrud nulla velit occaecat voluptate ea consequat eiusmod. Minim enim consectetur nulla velit adipisicing minim labore anim cillum officia labore eiusmod et et. Aliqua deserunt cupidatat cillum pariatur proident commodo consectetur ea exercitation ullamco adipisicing in. Minim occaecat sint laboris non aliqua est deserunt exercitation.
    Officia sint proident irure tempor officia enim. Consectetur ex id id ad eiusmod nulla tempor magna enim cupidatat velit incididunt ipsum quis. Adipisicing adipisicing consectetur quis veniam qui anim ad non in reprehenderit proident enim do. Ad irure proident consectetur sint nulla enim duis enim.
    Fugiat occaecat commodo cillum deserunt. Sit eiusmod ad esse sint laboris consequat cillum. Commodo minim consectetur proident ad enim cupidatat fugiat.`,
    image_url:
      "https://www.teahub.io/photos/full/3-31570_3840x2160-abstract-3d-art-4k-abstract-wallpaper-4k.jpg",
    user_id: 4,
    category_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
