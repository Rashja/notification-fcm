importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);

firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
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
