import UserRepository from "../Repositories/UserRepository.js";

export default async function ValidateUser(req, res, next) {
    const {session} = req;

    if (session) {

        const user = await UserRepository.findById(session.user_id);

        if (! user )
            return res.status(404).json({error: "cannot find your account."});

        req.user = user;
        return next();
    }

    return res.status(404).json({error: "session not found, please login again"});
}