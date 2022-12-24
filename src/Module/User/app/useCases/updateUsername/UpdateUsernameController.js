import UpdateUsernameUseCase from "./UpdateUsernameUseCase.js";

class UpdateUsernameController {

    async handle(req, res) {
        const {user} = req;
        const username = req.body.username.replace(' ', "");

        const updateUsernameUseCase = new UpdateUsernameUseCase();
        
        const {status, message} = await updateUsernameUseCase.execute(user, username);

        return res.status(status).json(message);
    }
}

export default new UpdateUsernameController;