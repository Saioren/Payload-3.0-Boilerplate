type Role = 'user' | 'editor' | 'author' | 'admin'

export type User = {
    role: Role;
    [key: string]: any;
    collection: string;
    email?: string;
    id: number | string;
    username?: string;
}