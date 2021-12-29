import path from 'path';
import Koa from 'koa';

const __dirname = path.resolve();
const STATIC_DIR = path.resolve(__dirname, 'dist', 'frontend');
const ENTRYPOINT = path.resolve(STATIC_DIR, 'index.html');

// Initialize our application server
const server = new Koa();
