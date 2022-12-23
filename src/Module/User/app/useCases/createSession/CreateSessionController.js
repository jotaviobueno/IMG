import CreateSessionUseCase from "./CreateSessionUseCase.js";

class CreateSessionController {

    async handle(req, res) {
        const {email, password} = req.body;

        const createSessionUseCase = new CreateSessionUseCase();

        const {status, message} = await createSessionUseCase.execute(email, password, req.headers['user-agent'], 
        req.connection.remoteAddress);

        return res.status(status).json(message);
    }

}

export default new CreateSessionController;