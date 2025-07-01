import { initializeApp } from "/static/vendor/libs/firebase/firebase-app.js";
import {
  getMessaging,
  getToken,
  onMessage,
} from "/static/vendor/libs/firebase/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB0TmOvxVCCrEdsnM5k7eLFTMoi-0Jki8",
  authDomain: "test-notification-d16ff.firebaseapp.com",
  projectId: "test-notification-d16ff",
  storageBucket: "test-notification-d16ff.firebasestorage.app",
  messagingSenderId: "1017193187656",
  appId: "1:1017193187656:web:4cd3dca775018ba5290b7d",
  measurementId: "G-YWX4X1RL3F",
};
const vapidKey =
  "BETg9QzJqiccDCqecaQtNL7YRs_sTdxA63JQP7Ae-TIZfYYtK8Wlda5xGH-5D8c5naqHSrEJSvZWR7qP51XXz6A";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

console.log("===web1", app);

window.onMessage = function (callback) {
  onMessage(messaging, callback);
};

window.onMessage((payload) => {
  console.log("🔥 FCM Message received:", payload);

  if (Notification.permission === "granted") {
    new Notification(payload.notification.title, {
      body: payload.notification.body,
      icon: "https://firebase.google.com/images/brand-guidelines/logo-logomark.png",
    });
  }
});

// Setup FCM
window.fcmToken = (async function () {
  try {
    // Request permission
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Notification permission denied");
    }

    const serviceWorkerRegistration = await navigator.serviceWorker.register(
      "/static/vendor/libs/firebase/firebase-messaging-sw.js"
    );

    // Get FCM token
    fcmToken = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration,
    });

    if (!fcmToken) {
      throw new Error("Failed to get FCM token");
    }
  } catch (error) {
    console.error(error);
  }
})();
