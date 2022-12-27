import GetAllSessionUseCase from "./getAllSessionUseCase.js";

class GetAllSessionController {

    async handle(req, res) {
        const {user} = req;

        const getAllSessionUseCase = new GetAllSessionUseCase();

        const {status, message} = await getAllSessionUseCase.execute(user);

        return res.status(status).json(message);
    }
}

export default new GetAllSessionController;