importScripts('/static/vendor/libs/firebase/firebase-app-compat.js');
importScripts('/static/vendor/libs/firebase/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDB0TmOvxVCCrEdsnM5k7eLFTMoi-0Jki8',
  authDomain: 'test-notification-d16ff.firebaseapp.com',
  projectId: 'test-notification-d16ff',
  storageBucket: 'test-notification-d16ff.firebasestorage.app',
  messagingSenderId: '1017193187656',
  appId: '1:1017193187656:web:4cd3dca775018ba5290b7d',
  measurementId: 'G-YWX4X1RL3F'
};
const vapidKey = 'BETg9QzJqiccDCqecaQtNL7YRs_sTdxA63JQP7Ae-TIZfYYtK8Wlda5xGH-5D8c5naqHSrEJSvZWR7qP51XXz6A';

firebase.initializeApp(firebaseConfig);

firebase.messaging();
