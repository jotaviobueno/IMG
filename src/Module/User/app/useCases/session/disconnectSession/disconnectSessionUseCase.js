import SessionRepository from "../../../Repositories/SessionRepository.js";

class disconnectSessionUseCase {

    _sessionRepository;

    constructor() {
        this._sessionRepository = SessionRepository;
    }

    async execute(user, session_id) {

        const session = await this._sessionRepository.existSession(session_id);

        if (! session )
            return {status: 404, message: { error: "reported session does not exist" }};

        if (session.user_id != user._id.toString())
            return {status: 401, message: { error: "not authorized" }};

        const disconnect = await this._sessionRepository.disconnect(session_id);

        if (disconnect && disconnect.modifiedCount === 1)
            return {status: 200, message: { success: "successfully disconnected session" }}; 

        return {status: 500, message: { error: "invalid request, try again" }};
    }
}

export default disconnectSessionUseCase;