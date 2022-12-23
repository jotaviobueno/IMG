import UserRepository from "../../Repositories/UserRepository.js";

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
            return {status: 201, message: { user: {
                full_name: user.full_name,
                username: user.username,
                email: user.email,
                avatar_url: user.avatar_url,
                birth_date: user.birth_date,
                permissions: user.permissions,
                created_at: user.created_at,
                updated_at: user.updated_at,
                deleted_at: user.deleted_at,
            }
        }};

        return {status: 500, message: { error: "error" }};
    }
}

export default CreateUserUseCase;