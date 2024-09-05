import checkRole from "../checkRole";

export const adminsAndUser = ({ req: { user } }) => {
    if (checkRole(['admin'], user)) {
        return true;
    }

    if (user) {
        return {
            email: {
                equals: user.email,
            }
        };
    }

    return false;
};
