import DisconnectSessionUseCase from "./disconnectSessionUseCase.js";

class disconnectSessionController {

    async handle(req, res) {
        const {user} = req;
        const {session_id} = req.body;

        const disconnectSessionUseCase = new DisconnectSessionUseCase();

        const {status, message} = await disconnectSessionUseCase.execute(user, session_id);

        return res.status(status).json(message);
    }
}

export default new disconnectSessionController;