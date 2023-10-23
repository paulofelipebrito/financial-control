import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    name: string,
    id: string,
    email: string,
    role: string
  }

  interface Session {
    user: {
      name: string,
      id: string,
      email: string,
      role: string
    }
  }
}