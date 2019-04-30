const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json({ urlencoded: true }));

app.get('/', (request, response) => {
  response.end();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) console.error(error)
  else console.log(`${PORT} notes flowing`);
})