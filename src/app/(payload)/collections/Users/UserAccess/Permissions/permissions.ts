import checkRole from "../checkRole";

// users: no access | editors: update access | author: create access | admin: full control

export const userAccess = ({ req: { user } }) => {
  return true;
};

export const editorAccess = ({ req: { user } }) => checkRole(['editor', 'author', 'admin'], user);

export const authorAccess = ({ req: { user } }) => checkRole(['author', 'admin'], user);

export const adminAccess = ({ req: { user } }) => checkRole(['admin'], user);
