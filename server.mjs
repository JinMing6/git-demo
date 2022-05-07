import http from "http";

function handleServer(request, response) {
    response.setHeader("Content-Type", "application/json;charset=utf8;")
	response.end(JSON.stringify({
        message: "Hello",
    }));
}

const server = http.createServer(handleServer);

let config = {
	hostname: "localhost",
	port: 8000,
};

server.listen(config.port, config.hostname, () => {
	console.log(`Server running at http://${config.hostname}:${config.port}`);
});
