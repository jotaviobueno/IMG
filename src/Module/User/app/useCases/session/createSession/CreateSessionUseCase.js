import UserRepository from '../../../Repositories/UserRepository.js';
import SessionRepository from '../../../Repositories/SessionRepository.js';

import SessionDTO from '../../../DTO/Response/SessionDTO.js';
import BcryptHelper from '../../../Helper/BcryptHelper.js';

class CreateSessionUseCase {

    _userRepository;
    _sessionRepository;

    constructor() {
        this._userRepository = UserRepository;
        this._sessionRepository = SessionRepository;
    }

    async execute(email, password, userAgent, address_ip) {

        const user = await this._userRepository.findByEmail(email);

        if (! user )
            return {status: 400, message: { error: "invalid credentials" }};

        if (! await BcryptHelper.comparePassword(password, user.password))
            return {status: 403, message: { error: "invalid credentials" }};

        const session = await this._sessionRepository.createSession(email, user._id, userAgent, address_ip);

        if (session)
            return {status: 201, message: { session: SessionDTO.oneSessionDTO(session) }};

        return {status: 500, message: { error: "invalid request, try again" }};
    }
}

export default CreateSessionUseCase;