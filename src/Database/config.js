import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyC2pM6MdnHeIjvjORA5XzUQb18fwNbP_Po",
  authDomain: "photowall-bb0fd.firebaseapp.com",
  databaseURL: "https://photowall-bb0fd.firebaseio.com",
  projectId: "photowall-bb0fd",
  storageBucket: "photowall-bb0fd.appspot.com",
  messagingSenderId: "675494703066",
  appId: "1:675494703066:web:94f52849a7be2376"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
