const server = require('./app');

server.listen(8080, () => {
    console.log('server is listening on http://localhost:8080')
});