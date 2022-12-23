import express from "express";
import "./database/MongoDB/connection.js";

import {userRoutes} from './routes/userRoutes.js';
import {sessionRoutes} from './routes/sessionRoutes.js'

import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: "50mb"}));

app.use("/user", userRoutes);
app.use("/session", sessionRoutes);

// server listening
app.listen(process.env.PORT || port, () => {
	console.log(`Server listening on port: ${process.env.PORT || port}`);
});