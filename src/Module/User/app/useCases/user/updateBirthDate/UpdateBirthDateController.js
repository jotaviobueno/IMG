import UpdateBirthDateUseCase from "./updateBirthDateUseCase.js";

class UpdateBirthDateController {

    async handle(req, res) {
        const {user} = req;
        const birth_date = req.body.birth_date;

        const updateBirthDateUseCase = new UpdateBirthDateUseCase();

        const {status, message} = await updateBirthDateUseCase.execute(user, birth_date);

        return res.status(status).json(message);
    }
}

export default new UpdateBirthDateController;