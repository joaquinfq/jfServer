require('./src/method/Get');
const jfServer         = require('./src/Server');
const [, , port, root] = process.argv;

const server = new jfServer({ port, root });
server.updateMimeTypes(['.css', '.html', '.md'], 'charset', 'UTF-8');
server.start();