import admin from "firebase-admin";

if (process.env.FIREBASE_DISABLED === "true") {
  console.log("🚨 Firebase Admin is disabled for this deployment.");
} else {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  }
}

export default admin;
