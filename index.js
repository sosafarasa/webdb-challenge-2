const server = require('./server');

const port = 4400;
server.listen(4400, () => {
  console.log("Server running on localhost: 4400");
});