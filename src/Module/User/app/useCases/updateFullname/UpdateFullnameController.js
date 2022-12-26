import UpdateFullnameUseCase from "./UpdateFullnameUseCase.js";

class UpdateFullnameController {

    async handle(req, res) {
        const {user} = req;
        const {full_name} = req.body

        const updateFullnameUseCase = new UpdateFullnameUseCase();
        
        const {status, message} = await updateFullnameUseCase.execute(user, full_name);

        return res.status(status).json(message);
    }
}

export default new UpdateFullnameController;