import React, { useEffect } from "react";
import { askForPermissioToReceiveNotifications } from "./push-notification";
import firebase from "firebase";

const App = () => {
  /* if notif need use this side effect */
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        askForPermissioToReceiveNotifications().then((paylaod) => {
          console.log(paylaod);
        });
        const messaging = firebase.messaging();
        messaging.onMessage((payload) => {
          console.log(payload);
        });
      }
    });
  }, []);

  return <div>this is from app</div>;
};

export default App;
