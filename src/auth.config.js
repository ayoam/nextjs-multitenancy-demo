export const authConfig = {
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            return !!auth?.user;
        }
    },
    providers : []
}