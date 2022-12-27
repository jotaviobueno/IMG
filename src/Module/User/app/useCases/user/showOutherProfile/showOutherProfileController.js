import ShowOutherProfileUseCase from './showOutherProfileUseCase.js';

class showOutherProfileController {

    async handle(req, res) {
        const username = req.params.username.replace(' ', "");

        const showOutherProfileUseCase = new ShowOutherProfileUseCase();

        const {status, message} = await showOutherProfileUseCase.execute(username);

        return res.status(status).json(message);
    }
}

export default new showOutherProfileController;