import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        //do a request to login

        return {
          name: "test",
          email: "test",
          role: "test",
          id: "test"
        }
      }
    }),
  ],
  callbacks: {
    jwt(params: any){
      if(params.user?.role){
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }

      return params.token;
    },
    session({session, token}){
      if(session.user){
        (session.user as {id: string}).id = token.id as string;
        (session.user as {role: string}).role = token.role as string;
      }

      return session;
    },
  }
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST}