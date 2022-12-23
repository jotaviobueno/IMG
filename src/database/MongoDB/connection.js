import mongoose from "mongoose";
import {storage} from "../../config/storage.js";

const connection = () => {
	mongoose.connect(storage.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	  }).then(() => {
		console.log("Database connection established.");
	});
};

export default connection();