import UserRepository from "../../../Repositories/UserRepository.js"

import UserDTO from '../../../DTO/Response/UserDTO.js'

class ShowOutherProfileUseCase {

    _userRepository

    constructor() {
        this._userRepository = UserRepository;
    }

    async execute(username) {

        const user = await this._userRepository.findByUsername(username);

        if (! user )
            return {status: 404, message: { error: "username not found" }};
        else
            return {status: 200, message: { user: UserDTO(user) }};
    }
}

export default ShowOutherProfileUseCase