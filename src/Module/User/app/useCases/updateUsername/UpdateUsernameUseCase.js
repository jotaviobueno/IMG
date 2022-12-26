import UserRepository from "../../Repositories/UserRepository.js";

class UpdateUsernameUseCase {

    _userRepository;

    constructor() {
        this._userRepository = UserRepository;
    }

    async execute(user, username) {

        if (user.username === username)
            return {status: 422, message: { error: "the username entered is the same as your account" }};

        if (await this._userRepository.findByUsername(username))
            return {status: 400, message: { error: "username already exist" }};

        if (await this._userRepository.update(user._id, "username", username))
            return {status: 204, message: { success: "" }};

        return {status: 500, message: { error: "try again" }};
    }
}

export default UpdateUsernameUseCase;