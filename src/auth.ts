
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, account, profile, isNewUser  }) {
      //console.log("Jwt user",user,account,profile,isNewUser)
      console.log("token",token,"account",account,"profile",profile)
      // if (user) { // User is available during sign-in
      //   token.id = user.id
      // }
      // if (account && profile) {
      //   token.id = profile.id;
      // }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub as string
      return session
    },
  },
  providers: [Google],
})