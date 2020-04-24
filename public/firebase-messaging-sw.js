importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);

firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyAl-PPKymCbC2seTUWXBaYHAAN3Hw0I8bg",
  authDomain: "test-8699c.firebaseapp.com",
  databaseURL: "https://test-8699c.firebaseio.com",
  projectId: "test-8699c",
  storageBucket: "test-8699c.appspot.com",
  messagingSenderId: "484864170409",
  appId: "1:484864170409:web:a998a5e9a58c9377574cb8",
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const title = "hello world";
  const options = {
    body: payload.data.status,
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", function (event) {
  console.log("click");

  // do what you want
  // ...
});
