import TurnAdminUseCase from './turnAdminUseCase.js';

class TurnAdminController {

    async handle(req, res) {
        const {user} = req;
        const {username} = req.body;

        const turnAdminUseCase = new TurnAdminUseCase();

        const {status, message} = await turnAdminUseCase.execute(user, username);

        return res.status(status).json(message);
    }
}

export default new TurnAdminController;