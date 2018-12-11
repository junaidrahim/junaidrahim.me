const express = require('express');

const server = express();
const port = 3000;

server.use(express.static('public'));

server.listen(port, () => console.log(`Server started on port ${port}`));
