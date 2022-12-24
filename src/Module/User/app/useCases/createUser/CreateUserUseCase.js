import UserRepository from "../../Repositories/UserRepository.js";

import UserDTO from "../../DTO/Response/UserDTO.js";

class CreateUserUseCase {
    
    _userRepository;

    constructor () {
        this._userRepository = UserRepository;
    }

    async execute(full_name, username, email, password, birth_date, avatar_url) {
        if (await this._userRepository.findByUsername(username))
            return {status: 400, message: { error: "username already exists"} };

        if (await this._userRepository.findByEmail(email))
            return {status: 400, message: { error: "email already exists" }};

        const user = await this._userRepository.createUser(full_name, username, email, password, birth_date, avatar_url);

        if ( user )
            return {status: 201, message: { user: UserDTO(user) }};

        return {status: 500, message: { error: "invalid request, try again" }};
    }
}

export default CreateUserUseCase;