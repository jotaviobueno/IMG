import {hash, compare} from 'bcrypt';

class BcryptHelper {

    async generateHash(password, salt) {
        return await hash(password, salt ?? 10);
    } 
    
    async comparePassword(password, hash) {
        return await compare(password, hash);
    }

}

export default new BcryptHelper;