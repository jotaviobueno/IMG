export default function CompareSession(session, userAgent, ip) {
    if (session.user_agent != userAgent && session.address_ip != ip)
        return false;

    return true;
}