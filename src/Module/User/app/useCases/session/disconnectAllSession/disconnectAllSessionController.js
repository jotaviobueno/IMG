import DisconnectAllSessionUseCase from "./disconnectAllSessionUseCase.js";

class disconnectAllSessionController {

    async handle(req, res) {
        const {user} = req;

        const disconnectAllSessionUseCase = new DisconnectAllSessionUseCase();

        const {status, message} = await disconnectAllSessionUseCase.execute(user);

        return res.status(status).json(message);
    }
}

export default new disconnectAllSessionController;