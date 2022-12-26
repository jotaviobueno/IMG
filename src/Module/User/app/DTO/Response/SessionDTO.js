
class SessionDTO {

    oneSessionDTO (session) {
        return {
            session_id: session.session_id,
            email: session.email,
            address_ip: session.address_ip,
            user_agent: session.user_agent,
            created_at: session.created_at,
        }
    }

    manySessionDTO (sessions) {
        const Session = [];

        for (let index = 0; index < sessions.length; index++) {
            const session = sessions[index];

            if (session)
                Session.push(this.oneSessionDTO(session));
        }

        return Session;
    }
}

export default new SessionDTO;