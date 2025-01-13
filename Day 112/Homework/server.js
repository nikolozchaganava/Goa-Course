const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

app.get("/homepage", (req, res) => {
  res.send(`
      <h1>Welcome to the Homepage</h1>
      <a href="/about">Go to About Page</a>
    `);
});
