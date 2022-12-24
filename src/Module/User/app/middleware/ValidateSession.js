import SessionRepository from '../Repositories/SessionRepository.js';

import CompareSession from '../Helper/CompareSession.js';

export default async function ValidateSession(req, res, next) {
    const {session_id} = req.headers;
    const userAget = req.headers['user-agent'];
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const session = await SessionRepository.existSession(session_id);

    if (! session )
        return res.status(400).json({error: "session not found please login again."});

    if (! CompareSession(session, userAget, ip))
        return res.status(401).json({error: "not authorized."});

    req.session = session;  
    return next();
}