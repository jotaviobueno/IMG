import express from "express";
import connectionToMongoose from './database/MongoDB/connection.js';

import cors from 'cors';

import indexRoutes from './routes/index.js';

connectionToMongoose()

const app = express();
const port = 3001;

app.use(cors());
app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: "50mb"}));

app.use(indexRoutes);

// server listening
app.listen(process.env.PORT || port, () => {
	console.log(`Server listening on port: ${process.env.PORT || port}`);
});