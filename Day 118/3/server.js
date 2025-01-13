const express = require('express');
const app = express();
const port = 3000;

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

app.get('/item/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < items.length) {
    res.send(items[id]);
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
