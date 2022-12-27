import SessionRepository from '../../../Repositories/SessionRepository.js';

import SessionDTO from '../../../DTO/Response/SessionDTO.js';

class GetAllSessionUseCase {

    _sessionRepository;

    constructor () {
        this._sessionRepository = SessionRepository;
    }

    async execute(user) {

        return { status: 200, message: {sessions: SessionDTO.manySessionDTO(
            await this._sessionRepository.getAllSession(user._id) )
        }};
    }
}

export default GetAllSessionUseCase;