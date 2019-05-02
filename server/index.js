const express = require('express');
const path = require('path');
const fs = require('file-system');
const app = express();
app.use(express.static('public'));
app.use(express.json({ urlencoded: true }));

app.get('/', (request, response) => {
  response.end();
});

app.get('/A.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/A.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Bb.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Bb.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/B.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/B.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Cb.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Cb.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/C.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/C.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Db.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Db.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/D.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/D.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Eb.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Eb.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/E.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/E.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Fb.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Fb.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/F.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/F.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Gb.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Gb.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/G.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/G.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

app.get('/Ab.wav', (request, response) => {
  const filePath = path.join(__dirname, "./simplif.io/Ab.wav");

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) console.error(error)
  else console.log(`${PORT} notes flowing`);
});