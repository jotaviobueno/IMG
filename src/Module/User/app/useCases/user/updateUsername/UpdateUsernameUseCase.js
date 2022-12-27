import UserRepository from "../../../Repositories/UserRepository.js";

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

        const update = await this._userRepository.update(user._id, "username", username);

        if (update.modifiedCount === 1)
            return {status: 204, message: { success: "" }};
        else
            return {status: 500, message: { error: "try again" }};
    }
}

export default UpdateUsernameUseCase;