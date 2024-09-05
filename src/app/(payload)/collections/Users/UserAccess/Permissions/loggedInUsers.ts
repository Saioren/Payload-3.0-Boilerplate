import { RequestWithUser } from "./permissions";

const loggedInUsers = ({ req }: { req: RequestWithUser }) => !!req.user;

export default loggedInUsers;