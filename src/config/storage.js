import dotenv from "dotenv";

dotenv.config();

const storage = {
	mongoURI: process.env.MONGO_URI,
};

export {storage};