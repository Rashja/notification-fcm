import firebase from "firebase";

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDMDZ0zS6oUNQpkv5ec8jtLPpMSEbkmDiI",
    authDomain: "notif-test-b2733.firebaseapp.com",
    databaseURL: "https://notif-test-b2733.firebaseio.com",
    projectId: "notif-test-b2733",
    storageBucket: "notif-test-b2733.appspot.com",
    messagingSenderId: "325632137137",
    appId: "1:325632137137:web:5548d4b54cae8760c64f90",
    measurementId: "G-2KVK7LG6MQ",
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();

    return token;
  } catch (error) {}
};
