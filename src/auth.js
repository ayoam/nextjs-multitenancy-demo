import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                if(credentials.username === 'admin' && credentials.password === 'admin') {
                    return { id: 1, name: 'John Doe'};
                }
                return null;
            },
    })],
});