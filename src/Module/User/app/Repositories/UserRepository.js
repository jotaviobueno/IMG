import UserModel from '../Models/UserModel.js';

import bcryptHelper from '../Helper/BcryptHelper.js';

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

    async findById(_id) {
        return await this._userModel.findOne({_id, deleted_at: null});
    }

    async createUser(full_name, username, email, password, birth_date, avatar_url) {
       return await this._userModel.create({
            full_name,
            username: username.replace(" ", ""),
            email,
            password: await bcryptHelper.generateHash(password, 10),
            is_admin: false,
            avatar_url: avatar_url ?? " ",
            birth_date: birth_date,
            permissions: ["user"],
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null
        });
    }

    async update(_id, updateField, value) {
        return await this._userModel.updateOne({_id, deleted_at: null}, {
            [updateField]: value, updated_at: new Date(),
        });
    }

    async turnAdmin(_id) {
        return await this._userModel.updateOne({_id, deleted_at: null}, { 
            is_admin: true, updated_at: new Date(), $push: { permissions: "admin" } 
        });
    }
}

export default new UserRepository;