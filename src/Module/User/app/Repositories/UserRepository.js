import UserModel from '../Models/UserModel.js';

import bcryptHelper from '../../Helper/BcryptHelper.js';

class UserRepository {

    _userModel;

    constructor () {
        this._userModel = UserModel;
    }

    async findByUsername(username) {
        return await this._userModel.findOne({username: username.replace(" ", ""), deleted_at: null});
    }

    async findByEmail(email) {
        return await this._userModel.findOne({email, deleted_at: null});
    }

    async createUser(full_name, username, email, password, birth_date, avatar_url) {
       return await this._userModel.create({
            full_name,
            username: username.replace(" ", ""),
            email,
            password: await bcryptHelper.generateHash(password, 10),
            avatar_url: avatar_url ?? " ",
            birth_date: new Date(birth_date), 
            permissions: ["guest"],
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null
        });
    }
}

export default new UserRepository;