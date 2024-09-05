const checkRole = (allRoles, user) => {
    if (user && user.roles) {
        return allRoles.includes(user.roles);
    }
    return false;
};

export default checkRole;
