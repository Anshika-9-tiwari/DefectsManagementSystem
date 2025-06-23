import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { PrismaClient } from '../../../generated/prisma';


const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type : "text", placeholder: "jsmith"},
                password: { label: "Password", type : "password"}
            },
            async authorize(credentials){
                try{
                const user = await prisma.users.findUnique({
                    where: {username: credentials.username},
                });

                if (!user) return null;


                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;

                return {id: user.id , name: user.username, role: user.role };
            } catch(error){
                console.error("Authorize error:", error);
                return null;
            }


            }
        })
    ],
    session: {
        strategy: 'jwt'
    },

    pages: {
        signin: '/Login',
    },
    callbacks:{
        async jwt({ token, user}){
            if (user){
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
    

    async session({session, token}){
        if (token){
            session.user.id = token.id;
            session.user.role = token.role;
        }
        return session

    },

},

    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}