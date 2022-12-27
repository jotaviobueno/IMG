import UserRepository from '../../../Repositories/UserRepository.js';

class TurnAdminUseCase {

    _userRepository;

    constructor() {
        this._userRepository = UserRepository;
    }

    async execute(user, username) {

        const userWhoWillBecomeAdministrator  = await this._userRepository.findByUsername(username);

        if (! userWhoWillBecomeAdministrator)
            return {status: 404, message: { error: "username not already exist" }};

        if (userWhoWillBecomeAdministrator.is_admin)
            return {status: 400, message: { error: "the user is already an administrator" }};

        const turnAdmin = await this._userRepository.turnAdmin(userWhoWillBecomeAdministrator._id);

        if (turnAdmin.matchedCount === 1)
            return {status: 200, message: { success: `the user with name ${user.username}, just became an admin` }};
        else 
            return {status: 500, message: { error: "try again" }};
    }
}

export default TurnAdminUseCase;