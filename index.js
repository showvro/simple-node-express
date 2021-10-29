const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send("Wow, I am Excited");
});

const users = [
  {
    id: 0,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01721313131",
  },
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01721313131" },
  {
    id: 2,
    name: "Satyabhama",
    email: "Satyabhama@gmail.com",
    phone: "01721313131",
  },
  { id: 3, name: "Sanjada", email: "Sanjada@gmail.com", phone: "01721313131" },
  { id: 4, name: "Sabaha", email: "Sabaha@gmail.com", phone: "01721313131" },
  { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: "01721313131" },
];

app.get("/fruits", (req, res) => {
  res.send(["mangos", "oranges", "jackfruits"]);
});

app.get("/users", (req, res) => {
  const search = req.query.search;

  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
