import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/wdm') {
        res.end("Welcome to this course");
    } else if (req.url === "/x") {
        res.end("Rest in peace");
    } else {
        res.end("<h1>Your request is accepted</h1>");
    }
});

const port = 1000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
