const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send the html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Internal server error");
    } else {
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on http://127.0.0.1:3000");
});