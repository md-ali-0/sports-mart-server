/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
    const port = config.port || 8080;
    await mongoose.connect(config.database_uri as string, {
        dbName: config.database_name,
    });
    console.log('Database Connected Successfully ...');
    server = app.listen(port, () => {
        console.log(`URL: http://localhost:${port}`);
    });
}

main();

process.on('unhandledRejection', () => {
    console.log(`Unhandled Rejection Detected.. Server Shutting Down`);

    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
});

process.on('uncaughtException', () => {
    console.log(`Unhandled Exception Detected.. Server Shutting Down`);
    process.exit(1);
});
