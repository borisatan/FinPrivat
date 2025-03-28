import 'dotenv/config'; // Import dotenv to load variables from the .env file

export default {
  expo: {
    name: 'BETA',
    slug: 'BETA',
    scheme: 'BETA',
    extra: {
      firebase: {
        apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
      },
      googleClientId: process.env.GOOGLE_CLIENT_ID,
    },
    android: {
      package: "com.BETA.app",
      googleServicesFile: "./google-services.json"
    },
    ios: {
      bundleIdentifier: "com.BETA.app",
      googleServicesFile: "./GoogleService-Info.plist"
    }
  },
};