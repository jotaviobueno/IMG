import ShowProfileUseCase from './ShowProfileUseCase.js';

class ShowProfileController {

    async handle(req, res) {
        const {user} = req;

        const showProfileUseCase = new ShowProfileUseCase();

        const {status, message} = await showProfileUseCase.execute(user);

        return res.status(status).json(message);
    }
}

export default new ShowProfileController;