import UserRepository from '../../Repositories/UserRepository.js';

import DateFormatHelper from '../../DTO/Response/DateFormatHelper.js';

class UpdateBirthDateUseCase {

    _userRepository

    constructor () {
        this._userRepository = UserRepository;
    }

    async execute(user, birth_date) {
        
        const birthDate = DateFormatHelper(new Date(birth_date));

        if (user.birth_date === birthDate)
            return {status: 400, message: { error: "the date entered is the same as in your account" }};

        const update = await this._userRepository.update(user._id, "birth_date", birthDate);

        if (update.modifiedCount === 1)
            return {status: 204, message: { success: "" }};
        else
            return {status: 500, message: { error: "try again" }};
    }
}

export default UpdateBirthDateUseCase;