import mongoose from "mongoose";
import {storage} from "../../config/storage.js";

export default function connectionToMongosoe() {
	mongoose.connect(storage.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false
	});

	const db = mongoose.connection;

	db.on("error", (error) => console.error(error));
	db.once("open", () => console.log("Database connection established."))
};