// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBZTMLLfBRHlxNNLkXrWvodEINAItnSu9o",
//   authDomain: "clone-7e227.firebaseapp.com",
//   databaseURL: "https://clone-7e227-default-rtdb.firebaseio.com",
//   projectId: "clone-7e227",
//   storageBucket: "clone-7e227.appspot.com",
//   messagingSenderId: "885286389401",
//   appId: "1:885286389401:web:2aaef65ee4ab3f048e9a08",
//   measurementId: "G-LZ6WJX1ZYT"
//   
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
     apiKey: "AIzaSyAjOeFPo5pEpg6Nhskq0R1TOGIN8Dluu9k",
     authDomain: "fake-data-66ffd.firebaseapp.com",
     projectId: "fake-data-66ffd",
     storageBucket: "fake-data-66ffd.appspot.com",
     messagingSenderId: "931316692871",
     appId: "1:931316692871:web:720f0d45d92ec20ebe8522",
     measurementId: "G-BPQXC799SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

