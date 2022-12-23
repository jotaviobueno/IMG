import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({

	full_name: { type: String, required: true, },
	username: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	avatar_url: { type: String },
	birth_date: { type: Date, required: true },
	permissions: { type: Array, required: true },
	created_at: { type: Date, default: Date.now, required: true },
	updated_at: { type: Date, required: true },
	deleted_at: { type: Date, default: Date.now },
});

export default mongoose.model("Users", User);