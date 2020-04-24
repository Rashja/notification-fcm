import firebase from "firebase";

export const initializeFirebase = () => {
  firebase.initializeApp({
    // fire base console configue
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
