import apps from './node-server';
import appx from './express-server';
let app  = apps;
let PORT = 1337;
let HOST = '127.0.0.1';

app(PORT, HOST);

console.log(`Server running at http://${HOST}:/${PORT}`);
module.exports = app;
