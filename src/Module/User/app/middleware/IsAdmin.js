export default function isAdmin(req, res, next) {
    const {user} = req;

    if (user.is_admin && user.permissions.find(perm => perm === "admin")) {
        
        return next();
    }

    return res.status(401).json({error: "not authorized"});
}