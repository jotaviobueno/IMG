import UserRepository from "../../Repositories/UserRepository.js";

class UpdateFullnameUseCase {

    _userRepository;

    constructor() {
        this._userRepository = UserRepository;
    }

    async execute(user, fullname) {

        if (user.full_name === fullname)
            return {status: 400, message: { error: "the name you entered and the same name that's in your account" }};

        const update = await this._userRepository.update(user._id, "full_name", fullname)

        if (update.matchedCount === 1)
            return {status: 204, message: { success: "" }};
        else
            return {status: 500, message: { error: "try again" }};
    }
}

export default UpdateFullnameUseCase;