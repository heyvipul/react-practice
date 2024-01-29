import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'

export const authOptions = {
    providers : [
        Github({
            clientId : '0b0233f0b8c8cdef05b4',
            clientSecret : '1fa4a5280c9e9d13ecca180c3bb23a70a822a8f8'
        })
    ]
}

export default NextAuth(authOptions);