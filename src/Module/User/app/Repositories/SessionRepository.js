import SessionModel from '../Models/SessionModel.js';

import {randomUUID as UUID} from 'crypto';

class SessionRepository {

    _sessionModel;

    constructor() {
        this._sessionModel = SessionModel;
    }

    async createSession(email, user_id, user_agent, address_ip) {
        return await this._sessionModel.create({
            session_id: UUID(),
            email,
            user_id,
            address_ip,
            user_agent,
            created_at: new Date(),
            updated_at: new Date(),
            disconnected_in: null
        });
    }

    async existSession(session_id) {
        return await this._sessionModel.findOne({session_id, disconnected_in: null });
    }

    async getAllSession(user_id) {
        return await this._sessionModel.find({user_id, disconnected_in: null});
    }

    async disconnect(session_id) {
        return await this._sessionModel.updateOne({session_id, disconnected_in: null},  {
            disconnected_in: new Date(), updated_at: new Date()
        });
    }

    async disconnectAllSession(user_id) {
        const allSession = await this.getAllSession(user_id);
        const updated = [];

        for (let index = 0; index < allSession.length; index++) {
            const sessions = allSession[index];
            
            const update = await this.disconnect(sessions.session_id);

            if (update.modifiedCount === 1)
                updated.push(update.length);
        }

        if (allSession.length === updated.length)
            return true;

        return false;
    }
}

export default new SessionRepository;