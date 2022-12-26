export default function UserDTO (session) {
    return {
        session_id: session.session_id,
        email: session.email,
        address_ip: session.address_ip,
        user_agent: session.user_agent,
        created_at: session.created_at,
    }
}