// import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import KakaoProvider from 'next-auth/providers/kakao'

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
//     }),
//     KakaoProvider({
//       clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
//     }),
//   ],

//   callbacks: {
//     async signIn({ account, profile, email, user }) {
//       if (account.provider === 'google') {
//         return profile.email_verified
//       }

//       return true
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// })
