const express = require("express");

const app = express();

app.use(express.json());

const booksData = [
  {
    id: 0,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 15.99,
    reviews: [
      { name: "John", value: "Great book!" },
      { name: "Alice", value: "Enjoyed reading it." },
    ],
  },
  {
    id: 1,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.5,
    reviews: [
      { name: "Emily", value: "A classic." },
      { name: "David", value: "Thought-provoking." },
    ],
  },
  {
    id: 2,
    bookName: "1984",
    author: "George Orwell",
    price: 18.75,
    reviews: [
      { name: "Sophia", value: "Dystopian masterpiece." },
      { name: "Michael", value: "Must-read for everyone." },
    ],
  },
  {
    id: 3,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 14.25,
    reviews: [],
  },
  {
    id: 4,
    bookName: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 20.0,
    reviews: [
      { name: "Chris", value: "Magical journey." },
      { name: "Emma", value: "Captivating plot." },
    ],
  },
  {
    id: 5,
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 16.5,
    reviews: [
      { name: "Liam", value: "Epic adventure." },
      { name: "Olivia", value: "Loved the characters." },
    ],
  },
  {
    id: 6,
    bookName: "Brave New World",
    author: "Aldous Huxley",
    price: 22.99,
    reviews: [],
  },
  {
    id: 7,
    bookName: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 25.5,
    reviews: [
      { name: "Ava", value: "Fantasy masterpiece." },
      { name: "Noah", value: "Epic storytelling." },
    ],
  },
  {
    id: 8,
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    price: 17.75,
    reviews: [
      { name: "Ella", value: "Classic romance." },
      { name: "James", value: "Beautifully written." },
    ],
  },
  {
    id: 9,
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    price: 19.99,
    reviews: [],
  },
  {
    id: 10,
    bookName: "Franny and Zooey",
    author: "J.D. Salinger",
    price: 14.99,
    reviews: [
      { name: "Sarah", value: "Unique storytelling." },
      { name: "Daniel", value: "Enjoyable characters." },
    ],
  },
  {
    id: 11,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 15.75,
    reviews: [
      { name: "Oliver", value: "Memorable characters." },
      { name: "Sophie", value: "Powerful narrative." },
    ],
  },
];

const userData = [];

// app.get("/books", (req, res) => {
//   res.send("working");
// });

const router = express.Router();

router.route("/books").get((req, res) => {
  res.json({
    books: booksData,
  });
});

router.route("/books/:id").get((req, res) => {
  let id = req.params.id;

  let data = booksData.filter((item) => item.id == id);

  res.json({
    books: data,
  });
});

router.route("/author/:author").get((req, res) => {
  let author = req.params.author;

  let data = booksData.filter((item) => item.author == author);

  res.json({
    books: data,
  });
});

router.route("/title").post((req, res) => {
  let name = req.body.title;
  let data = booksData.filter((item) => item.name == name);
  res.json({
    books: data,
  });
});

router.route("/review/:id").get((req, res) => {
  let id = req.params.id;
  let data = booksData.filter((item) => item.id == id);
  res.json({
    reviews: data[0].reviews,
  });
});
router.route("/review/:id").post((req, res) => {
  let id = req.params.id;

  booksData.map((i) => {
    if (id == i.id) {
      i.reviews.push(req.body);
    }
  });

  res.json({
    success: true,
    message: "Review Added!",
  });
});
router.route("/review/:id/:name").delete((req, res) => {
  let id = req.params.id;
  let name = req.params.name;

  booksData.map((i) => {
    if (id == i.id) {
      i.reviews = i.reviews.filter((i) => i.name !== name);
    }
  });

  res.json({
    success: true,
    message: "Review Deleted!",
  });
});

router.route("/register").post((req, res) => {
  let { name, pass } = req.body;

  userData.push({ name, pass });

  res.json({
    success: true,
    message: "user Added!",
  });
});

router.route("/login").post((req, res) => {
  let { name, pass } = req.body;

  res.json({
    success: true,
    message: "user logged in!",
  });
});

app.use(router);

app.listen(5050, () => {
  console.log("Server Live on http://localhost:5050");
});
