export default function UserDTO (user) {
    return {
        full_name: user.full_name,
        username: user.username,
        email: user.email,
        avatar_url: user.avatar_url,
        birth_date: user.birth_date,
        created_at: user.created_at,
        updated_at: user.updated_at,
    }
}