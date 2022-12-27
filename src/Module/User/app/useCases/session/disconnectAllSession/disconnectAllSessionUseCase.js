import SessionRepository from "../../../Repositories/SessionRepository.js";

class disconnectAllSessionUseCase {

    _sessionRepository

    constructor() {
        this._sessionRepository = SessionRepository;
    }

    async execute(user) {

        if (await this._sessionRepository.disconnectAllSession(user._id))
            return {status: 200, message: { success: "all session was been updated" }};
        else 
            return {status: 500, message: { error: "invalid request, try again" }};
    }
}

export default disconnectAllSessionUseCase;