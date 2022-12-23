import CreateUserUseCase from './CreateUserUseCase.js'

class CreateUserController {

    async handle(req, res) {
        const {full_name, username, email, password, birth_date, avatar_url} = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const {status, message} = await createUserUseCase.execute(full_name, username, email, password, birth_date, avatar_url);

        return res.status(status).json(message);
    }
}

export default new CreateUserController;