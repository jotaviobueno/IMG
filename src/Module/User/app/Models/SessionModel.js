import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Session = new Schema({

	session_id: { type: String, unique: true, required: true, },
	email: { type: String, required: true, },
	user_id: { type: mongoose.Types.ObjectId, required: true, ref: "Users" },
	address_ip: { type: String, required: true },
	user_agent: { type: String, required: true },
	created_at: { type: Date, default: Date.now, required: true },
	updated_at: { type: Date, required: true },
	disconnected_in: { type: Date }
});

export default mongoose.model("Session", Session);